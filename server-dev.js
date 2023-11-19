import fs from 'fs'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import { renderToString } from 'react-dom/server';

const app = express();

const vite = await createViteServer({
	server: { middlewareMode: true },
	appType: 'custom'
});

app.use(vite.middlewares);

app.use('*', async function(req, resp, next){
	const url = req.originalUrl;
	
	try{
		let template = fs.readFileSync('./index.html', 'utf-8');
		template = await vite.transformIndexHtml(url, template);
		const createApp = (await vite.ssrLoadModule('./src/entry-server.tsx')).default;
		const context = { url };

		const { app, store, cache } = await createApp(context);
		const html = await recoursiveRender(app, cache);
		const ssrData = {
			store: store.toJSON(),
			cache: cache.data
		}

		const page = template
			.replace('<!--ssr-->', html)
			.replace('<!--ssr-title-->', store.page.title)
			.replace('<!--ssr-data-->', `<script>
				window.appSSRData = ${JSON.stringify(ssrData)}
			</script>`);

		if(store.page.status >= 300 && store.page.status <= 308){
			resp.redirect(store.page.status, store.page.redirectTo);
		}
		else{
			resp.status(store.page.status);
			resp.end(page);
		}
	}
	catch(e){
		vite.ssrFixStacktrace(e);
		next(e);
	}
});

app.listen(5173);

async function recoursiveRender(app, cache){
	const html = renderToString(app);
	const awatingArr = [];
		
	Object.entries(cache.awaiting).forEach(([schema, item]) => {
		Object.entries(item).forEach(([key,promise]) => {
			awatingArr.push([schema, key, promise]);
		})
	});

	if(awatingArr.length > 0){
		const items = await Promise.all(awatingArr.map(([s, k, p]) => p.then(data => ({ s, k, data }))));
		
		items.forEach(item => {
			cache.data[item.s] ||= {};
			cache.data[item.s][item.k] = item.data
		});

		cache.awaiting = {};

		return recoursiveRender(app, cache);
	}

	return html;
}