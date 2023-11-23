import App from './components/App.js'
import RootStore from './store/index.js';
import storeContext from './contexts/store.js';
import apiContext from './contexts/api.js';
import cacheContext from './contexts/cache.js';
import createHttpPlugin from './plugins/http.js'
import createApi from './api/index.js';
import { Cache } from './contexts/cache.js';

async function createApp(){
	const http = createHttpPlugin('http://localhost:3000/');
	const api = createApi(http);
	const store = new RootStore(api);
	const cache: Cache = { data: {}, awaiting: {} };

	if(!import.meta.env.SSR){
		http.interceptors.request.use(config => {
			const token = localStorage.getItem('AUTH_TOKEN');
	
			if(token !== null){
				config.headers.Authorization = `Bearer ${token}`;
			}
	
			return config;
		});
		
		http.interceptors.response.use(r => r, e => {
			if(e.response?.status === 401){
				document.location = '/auth/login';
			}
			else{
				return Promise.reject(e);
			}
		});

		http.interceptors.response.use(r => r, e => {
			if('errorAlert' in e.config){
				console.log('push error to alerts store or some lib like react-toast')
			}
			
			return Promise.reject(e);
		});
		
		store.auth.init();
	}

	if(!import.meta.env.SSR && window.appSSRData){
    store.fromJson(window.appSSRData.store);
		cache.data = window.appSSRData.cache;
	}
	else{
    await store.users.load();
	}

	const app = 
		<apiContext.Provider value={api}>
			<storeContext.Provider value={store}>
				<cacheContext.Provider value={cache}>
					<App />
				</cacheContext.Provider>
			</storeContext.Provider>
		</apiContext.Provider>;
	
	return { app, store, api, cache };
}

export default createApp;
