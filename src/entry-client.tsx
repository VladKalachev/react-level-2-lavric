/* import React from 'react' */
import { createRoot, hydrateRoot } from 'react-dom/client'
import createApp from './app'
import { BrowserRouter } from 'react-router-dom';

(async function(){
	try{	
		const { app } = await createApp();
		const el = document.getElementById('root')!;
		const clientApp = <BrowserRouter>{ app }</BrowserRouter>;

		if(window.appSSRData !== undefined){
			hydrateRoot(el, clientApp);
		}
		else{
			createRoot(el).render(clientApp);
		}
	}
	catch(e){
		document.body.innerHTML = `<div>Site cant work now!</div>`;
	}
})();

import 'bootstrap/dist/css/bootstrap.min.css'
