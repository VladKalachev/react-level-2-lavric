import User from "./user";


function createRootStore(api) {
  const rootStore = {
    user: new User(api)
  }

  return rootStore;

}

export default createRootStore;