import { observer } from "mobx-react";
import useApiRequest from "../../../hooks/useApiRequest";
import useUserOutletContext from "../outlet/useUserOutlet";

const UserTodosPage = observer(() => {
	const user = useUserOutletContext();
	const { success, data: todos } = useApiRequest('users.todos.all', user.id);

	return <div>
		<h2>User todos</h2>
		{ success && <ul className="list-group">
			{ todos.map(todo => <li className="list-group-item" key={todo.id}>{ todo.title }</li>) }
		</ul> }
	</div>
});

export default UserTodosPage;