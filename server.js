
import express from 'express';
import createApp from './dist-server/entry-server.js';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

const server = express();

const template = readFileSync('dist/index.html').toString('utf-8');

server.use(express.static('dist'));

async function recoursiveRender(app, cache){
	const html = renderToString(app);
	const awatingArr = [];

	// f****ing types, in this situation flat cache was better than now version
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


server.get('*', async function(req, resp){
	try{
		const context = { url: req.url };
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
		console.log(e);
		//log e
		resp.end(template);
	}
});

server.listen(8000);