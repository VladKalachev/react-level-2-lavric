import createApp from './app';
import { StaticRouter } from 'react-router-dom/server';

function createServer(context) {
  console.log("here")
 
  const app = createApp();

  return <StaticRouter location={context.url}>{app}</StaticRouter>
}
export default createServer;