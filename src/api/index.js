import createProductsApi from "./products";

function createApi(http) {
  return {
    products: createProductsApi(http)
  }
}

export default createApi