import { observer } from "mobx-react";
import useRouteInt from "../../hooks/useRouteInt";
import Error404 from "../../components/erorrs/Error404";
import UserDetailed from "../../components/users/UserDetailed";
import useStore from "../../hooks/useStore";

const UserPage = observer(() => {
	const routeId = useRouteInt('id');
	const { users } = useStore();
	const user = routeId.isValid ? users.one(routeId.value) : undefined;

	if(!user){
		return <Error404 title="User not found" />
	}

	const neighbours = users.neighbours(user.id);

	return <UserDetailed user={user} neighbours={neighbours} key={user.id} />;
});

export default UserPage;