import { makeAutoObservable } from "mobx";

class User {
  id = null;
  constructor(api) {
    makeAutoObservable(this);
    this.id = Math.random();
    this.api = api;
  }
}

export default User;