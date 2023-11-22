import { TApiInstance } from "../api";
import User from "./modules/user";
import Card from './modules/card';
import Catalog from "./modules/catalog";
import Page from "./modules/page";
import Users from "./modules/users";
import Auth from "./modules/auth";

class RootStore {
  api: TApiInstance;
	catalog: Catalog;
	user: User;
  users: Users;
	card: Card;
	page: Page;
	auth: Auth;

  constructor(api: TApiInstance) {
    this.api = api;

    this.user = new User(this);
    this.users = new Users(this);
    this.card = new Card(this);
    this.catalog = new Catalog(this);
    this.page = new Page(this);
		this.auth = new Auth(this);
  }

	toJson(): JSONStore{
		return {
			users: {
				users: this.users.users
			}
		};
	}

	fromJson(data: JSONStore){
		this.users.users = data.users.users;
	}
}

// export interface JSONRootStore{
// 	catalog: {
// 		products: Catalog['products']
// 	}
// }

export interface JSONStore{
	users: {
		users: Users['users']
	}
}

export default RootStore;