import { makeAutoObservable } from "mobx";

export class StoreModule {
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}