
import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';
import cacheContext, { Cache } from './contexts/cache'

interface ServerAppContext {
url: string;
} 

async function createServer(context: ServerAppContext) {
 
  const { app, store } = await createApp();

	const cache: Cache = { data: {}, awaiting: {} };


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