import { makeAutoObservable } from "mobx";

class Card {
  id = null;
  
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default Card;