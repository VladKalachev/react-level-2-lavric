import { makeAutoObservable } from "mobx";

class Card {
  id = null;
  name = "Card";
  
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default Card;