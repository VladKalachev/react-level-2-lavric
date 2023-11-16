import ProductsPage from "../pages/ProductsPage";
import ProductItemPage from "../pages/ProductItemPage";
import Error404 from "../components/erorrs/Error404";

const routes = [
  {
    path: '/',
    Component: ProductsPage
  },
  {
    path: '/catalog/:id',
    Component: ProductItemPage
  },
  {
    path: '*',
    element: <Error404 />
  }
]

export default routes;