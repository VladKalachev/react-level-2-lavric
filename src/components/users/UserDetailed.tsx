import { Link, Outlet } from "react-router-dom";
import { TUserNeighbours, TUserPrimary } from "../../types/data";
import useApiRequest from "../../alien/hooks/useApiRequest";

interface UserDetailedProps{
	user: TUserPrimary,
	neighbours: TUserNeighbours
}

function UserDetailed({ user, neighbours }: UserDetailedProps){
	const { success, data } = useApiRequest('users.one', user.id);

	return <div>
		<Link to="/">Home</Link> / 
		<span>{ user.username }</span>
		<hr/>
		{ success && 
			<div>
				{ data.phone }
				{ data.company.name }
				{ data.website }
			</div>
		}
		<hr/>
		<Link to={`/user/${user.id}/todos`}>Todos</Link>
		<Link to={`/user/${user.id}/hi`}>Sample</Link>
		<hr/>
		<Outlet />
		<hr/>
		{ neighbours.prev && <Link to={`/user/${neighbours.prev.id}`}>Prev user</Link> }
		{ neighbours.next && <Link to={`/user/${neighbours.next.id}`}>Next user</Link> }
	</div>
}

export default UserDetailed;