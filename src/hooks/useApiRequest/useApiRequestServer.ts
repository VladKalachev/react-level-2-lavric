import { TApiInstance, TApiInstanceKeys } from "../../api";
import cacheContext from "../../contexts/cache";
import { GetByDotKey } from "../../types/utility/objects";
import { TApiRequest } from "./types";
import { useContext } from 'react'

function useApiRequestServer<T extends TApiInstanceKeys>(
	schema: T, 
	...params: Parameters<GetByDotKey<TApiInstance, T>>
){
	type Res = Awaited<ReturnType<GetByDotKey<TApiInstance, T>>>;

	const cache = useContext(cacheContext);
	const key = schema + ':' + JSON.stringify(params);
	
	const result: TApiRequest<Res> = key in cache ? 
		{
			done: true,
			success: true,
			data: cache[key] as Res,
			error: null
		} : {
			done: false,
			success: false,
			data: null,
			error: null
		};

	return result;
}

export default useApiRequestServer;