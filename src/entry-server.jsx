import createApp from './app';

function createServer() {
  console.log("here")
  const app = createApp();

  return app;
}
export default createServer;