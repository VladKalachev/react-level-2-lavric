import User from "./modules/user";
import Card from './modules/card';
import Catalog from "./modules/catalog";
import Page from "./modules/page";

class RootStore {
  constructor(api) {
    this.api = api;

    this.user = new User(this);
    this.card = new Card(this);
    this.catalog = new Catalog(this);
    this.page = new Page(this);
  }
}

export default RootStore;