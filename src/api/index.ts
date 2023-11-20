import { FlattenObjectKeys } from "../types/utility/objects";
import createProductsApi from "./products";
import { AxiosInstance } from "axios";
import createUsersApi from "./users";

function createApi(http: AxiosInstance) {
  return {
    products: createProductsApi(http),
    users: createUsersApi(http)
  }
}

export default createApi

export type TApiInstance = ReturnType<typeof createApi>;
export type TApiInstanceKeys = FlattenObjectKeys<TApiInstance, true>