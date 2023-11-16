import { makeAutoObservable } from "mobx";
import RootStore from "..";

class Card {
  id = null;
  name = "Card";

  rootStore: RootStore
  
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default Card;