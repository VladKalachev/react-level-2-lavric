import ProductsPage from "../pages/ProductsPage";
import ProductItemPage from "../pages/ProductItemPage";
import Error404 from "../components/erorrs/Error404";
import { Params, RouteObject } from "react-router-dom";
import { TApiInstance } from "../api";
import RootStore from "../store";

type DataLoaderResult = [ string, unknown ];

type Route = RouteObject & {
	data?: (context: RouteDataLoader) => Promise<DataLoaderResult>
}

type RouteDataLoader = {
	store: RootStore,
	api: TApiInstance,
	params: Params<string>
}

const routes: Route[] = [
  {
    path: '/',
    Component: ProductsPage
  },
  {
    path: '/catalog/:id',
    Component: ProductItemPage,
    async data({ api, params }){
			return [`products.one:[${params.id}]`, await api.products.one(parseInt(params.id ?? ''))]
		}
  },
  {
    path: '*',
    element: <Error404 />
  }
]

export default routes;