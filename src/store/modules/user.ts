import { makeAutoObservable } from "mobx";
import RootStore from "..";

class User{
  items = [];

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default User;