import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';

function createServer(context) {
  console.log("here")
 
  const { app, store } = createApp();

  const serverApp =  <StaticRouter location={context.url}>{app}</StaticRouter>

  return { app: serverApp, store }
}
export default createServer;