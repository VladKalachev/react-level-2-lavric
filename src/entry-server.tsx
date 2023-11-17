import { matchRoutes } from 'react-router-dom';
import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';
import cacheContext from './contexts/cache'
import routes from './router';

interface ServerAppContext {
url: string;
} 

async function createServer(context: ServerAppContext) {
 
  const { app, store, api } = await createApp();

  const activeRoutes = matchRoutes(routes, context.url);
	const cache: Record<string, unknown> = {};

	if(activeRoutes){
		const dataRequests = activeRoutes.map(i => i.route.data != undefined && i.route.data({
			store,
			api,
			params: i.params
		}));
	
		const responses = (await Promise.all(dataRequests));

		responses.forEach(response => {
			if(response !== false){
				cache[response[0]] = response[1];
			}
		})
	}

  const serverApp =  (
    <StaticRouter location={context.url}>
      <cacheContext.Provider value={cache}>
        { app }
      </cacheContext.Provider>
    </StaticRouter>
  )

  return { app: serverApp, store }
}
export default createServer;