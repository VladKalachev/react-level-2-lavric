import { AxiosInstance } from "axios";
import { TTodo, TUser } from "../types/data";

function createUsersApi(http: AxiosInstance){
	return {
		async all(){
			return (await http.get<TUser[]>('users')).data;
		},
		async one(id: number){
			return (await http.get<TUser>(`users/${id}`)).data;
		},
		todos: {
			async all(userId: number){
				return (await http.get<TTodo[]>(`users/${userId}/todos`)).data;
			}
		}
	};
}

export default createUsersApi;