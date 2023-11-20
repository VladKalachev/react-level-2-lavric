
import Error404 from "../components/erorrs/Error404";
import { RouteObject } from "react-router-dom";
import UsersPage from "../pages/users/UsersPage";
import UserPage from "../pages/users/UserPage";
import UserTodosPage from "../pages/users/todos/UserTodosPage";

const routes: RouteObject[] = [
  {
		path: '/',
		Component: UsersPage
	},
  {
		path: '/user/:id',
		Component: UserPage,
		children: [
			{
				path: '/user/:id/todos',
				Component: UserTodosPage
			},
			{
				path: '/user/:id/hi',
				element: <div>hi there</div>
			}
		]
	},
  {
    path: '*',
    element: <Error404 />
  }
]

export default routes;