import { makeAutoObservable } from "mobx";
import RootStore from "..";

class Page {
  status: number = 200;
  title: string = "";
  redirectTo: string | null = null

  rootStore: RootStore
  
  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  update(title: string, status = 200) {
    this.title = title;
    this.status = status;

    if (!import.meta.env.SSR) {
      document.title = title;
    }
  }

  redirect(url: string, status: number = 301){
		this.redirectTo = url;
		this.status = status;
	}
}

export default Page;