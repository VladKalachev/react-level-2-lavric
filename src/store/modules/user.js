import { makeAutoObservable } from "mobx";


class User{
  items = [];

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default User;