import App from './components/App'
import createRootStore from './store';
import storeContext from './contexts/store';
function createApp() {
  const rootStore = createRootStore();
  const app = (
    <storeContext.Provider value={rootStore}>
      <App />
    </storeContext.Provider>
  );

  return app;
}

export default createApp;

