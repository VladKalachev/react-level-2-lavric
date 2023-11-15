import App from './components/App'
import RootStore from './store';
import storeContext from './contexts/store';
import createHttpPlugin from './plugins/http';
import createApi from './api/index';

async function createApp() {
  const http = createHttpPlugin('./api');
  const api = createApi(http);
  const rootStore = new RootStore(api);

  //await rootStore.products.all();

  const app = (
    <storeContext.Provider value={rootStore}>
      <App />
    </storeContext.Provider>
  );

  return app;
}

export default createApp;

