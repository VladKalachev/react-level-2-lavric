import { observer } from "mobx-react";
import useRouteInt from "../../../alien/hooks/useRouteInt";
import Error404 from "../../../alien/components/erorrs/Error404";
import useStore from "../../../alien/hooks/useStore";
import UserTodos from "../../../components/users/todos/UserTodos";

const UserTodosPage = observer(() => {
	const routeId = useRouteInt('id');
	const { users } = useStore();
	const user = routeId.isValid ? users.one(routeId.value) : undefined;

	if(!user){
		return <Error404 title="User not found" />
	}

	return <UserTodos user={user} />
});

export default UserTodosPage;