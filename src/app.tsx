import App from './components/App'
import RootStore from './store';
import storeContext from './contexts/store';
import createHttpPlugin from './plugins/http';
import createApi from './api/index';
import apiContext from './contexts/api';

async function createApp() {
  const http = createHttpPlugin('./api');
  const api = createApi(http);
  const store = new RootStore(api);

  //await rootStore.products.all();

  const app = (
    <apiContext.Provider value={api}>
      <storeContext.Provider value={store}>
        <App />
      </storeContext.Provider>
    </apiContext.Provider>
  );

  return { app, store };
}

export default createApp;

