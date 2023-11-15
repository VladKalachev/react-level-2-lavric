import User from "./modules/user";
import Card from './modules/card';

class RootStore {
  constructor(api) {
    this.api = api;
    
    this.user = new User(this);
    this.card = new Card(this);
  }
}

export default RootStore;