import { makeAutoObservable } from "mobx";

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
  
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}

export default Catalog;