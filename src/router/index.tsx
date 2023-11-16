import ProductsPage from "../pages/ProductsPage";
import ProductItemPage from "../pages/ProductItemPage";

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
    element: <div>404</div>
  }
]

export default routes;