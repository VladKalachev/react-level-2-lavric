import { makeAutoObservable } from "mobx";
import RootStore from "..";

class Catalog {
  id = null;
  name = "Card";

  products = [
    {
      id: 1,
      name: "Iphone 10",
    },
    {
      id: 2,
      name: "Huawei",
    },
    {
      id: 3,
      name: "Nokia 10",
    },
    {
      id: 4,
      name: "Samsung 10",
    }
  ];

  rootStore: RootStore
  
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  get one() {
   return (id: number) => this.products.find(pr => pr.id === id)
  }
}

export default Catalog;