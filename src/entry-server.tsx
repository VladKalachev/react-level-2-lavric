import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';

interface ServerAppContext {
url: string;
} 

function createServer(context: ServerAppContext) {
  console.log("here")
 
  const { app, store } = createApp();

  const serverApp =  <StaticRouter location={context.url}>{app}</StaticRouter>

  return { app: serverApp, store }
}
export default createServer;