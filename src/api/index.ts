import createProductsApi from "./products";
import { AxiosInstance } from "axios";

function createApi(http: AxiosInstance) {
  return {
    products: createProductsApi(http)
  }
}

export default createApi

export type TApiInstance = ReturnType<typeof createApi>;