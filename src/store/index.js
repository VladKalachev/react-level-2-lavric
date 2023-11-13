import User from "./user";


function createRootStore() {
  const rootStore = {
    user: new User()
  }

  return rootStore;

}

export default createRootStore;