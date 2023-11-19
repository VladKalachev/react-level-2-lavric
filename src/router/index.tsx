import ProductsPage from "../pages/ProductsPage";
import ProductItemPage from "../pages/ProductItemPage";
import Error404 from "../components/erorrs/Error404";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    Component: ProductsPage
  },
  {
    path: '/catalog/:id',
    Component: ProductItemPage,
  },
  {
    path: '*',
    element: <Error404 />
  }
]

export default routes;