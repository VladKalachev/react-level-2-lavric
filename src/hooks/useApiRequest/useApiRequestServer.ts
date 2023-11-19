import { TApiInstance, TApiInstanceKeys } from "../../api";
import { GetByDotKey, getByDotKey, runFnWithTuple } from "../../types/utility/objects";
import useApi from "../useApi";
import useCache from "../useCache";
import { TApiRequest } from "./types";

function useApiRequestServer<T extends TApiInstanceKeys>(
	schema: T, 
	...params: Parameters<GetByDotKey<TApiInstance, T>>
){
	type Res = Awaited<ReturnType<GetByDotKey<TApiInstance, T>>>;

	const api = useApi();
	const fn = getByDotKey(api, schema);
	const cache = useCache();
	const key = JSON.stringify(params);
	
	let result: TApiRequest<Res>;
	const fnCache = cache.data[schema];
	
	if(fnCache !== undefined && fnCache[key]){
		result = {
			done: true,
			success: true,
			data: fnCache[key],
			error: null
		}
	}
	else{
		if(cache.awaiting[schema] === undefined){
			cache.awaiting[schema] = {};
		}

		const awaitingBox = cache.awaiting[schema];

		if(awaitingBox && awaitingBox[key] === undefined){
			awaitingBox[key] = runFnWithTuple(fn, params);
		}

		result = {
			done: false,
			success: false,
			data: null,
			error: null
		}
	}

	return result;
}

export default useApiRequestServer;