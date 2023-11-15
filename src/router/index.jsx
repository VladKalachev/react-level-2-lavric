import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

const routes = [
  {
    path: '/',
    Component: Page1
  },
  {
    path: '/2',
    Component: Page2
  },
  {
    path: '*',
    element: <div>404</div>
  }
]

export default routes;