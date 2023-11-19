
import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';

interface ServerAppContext {
	url: string;
} 

async function createServer(context: ServerAppContext) {
 
  const { app, store, cache } = await createApp();

  const serverApp =  (
    <StaticRouter location={context.url}>
        { app }
    </StaticRouter>
  )

  return { app: serverApp, store, cache }
}
export default createServer;