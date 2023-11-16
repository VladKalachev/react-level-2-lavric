
import express from 'express';
import createApp from './dist-server/entry-server.js';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

const server = express();

const template = readFileSync('dist/index.html').toString('utf-8');

server.use(express.static('dist'));

server.get('*', async function(req, res){
	try{
		const context = { url: req.url };
		const { app, store } = await createApp(context);
		const html = renderToString(app);
		const page = template.replace('<!--ssr-->', html).replace('<!--ssr-title-->', store.page.title);
	
		if(store.page.status >= 300 && store.page.status <= 308){
			res.redirect(store.page.status, store.page.redirectTo);
		}
		else{
			res.status(store.page.status);
			res.end(page);
		}
	}
	catch(e){
		//log e
		res.end(template);
	}
});

server.listen(8000)