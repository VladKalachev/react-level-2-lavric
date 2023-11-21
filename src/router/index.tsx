import Error404 from "../components/erorrs/Error404";
import UsersPage from "../pages/users/UsersPage";
import UserPage from "../pages/users/UserPage";
import UserTodosPage from "../pages/users/todos/UserTodosPage";
import { RouteRecords, recordToNative } from "../router/lib";

const routes = {
	home: {
		path: '/',
		Component: UsersPage
	},
	user: {
		path: '/user/:id',
		Component: UserPage,
		children: {
			todos: {
				path: '/user/:id/todos',
				Component: UserTodosPage
			},
			hi: {
				path: '/user/:id/hi',
				element: <div>hi there</div>,
				children: {
					some: {
						path: '/user/:id/hi/:sample',
						Component: UserTodosPage
					}
				}
			}
		}
	},
	e404: {
		path: '*',
		element: <Error404 />
	}
} as const satisfies RouteRecords;


export type TRoutes = typeof routes;

export const routesNative = Object.values(routes).map(recordToNative)

export default routes