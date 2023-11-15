import User from "./modules/user";
import Card from './modules/card';
import Catalog from "./modules/catalog";

class RootStore {
  constructor(api) {
    this.api = api;

    this.user = new User(this);
    this.card = new Card(this);
    this.catalog = new Catalog(this);
  }
}

export default RootStore;