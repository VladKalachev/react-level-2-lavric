import { TApiInstance, TApiInstanceKeys } from "../../api";
import { GetByDotKey, getByDotKey, runFnWithTuple } from "../../types/utility/objects";
import useApi from "../useApi";
import { useState, useEffect } from 'react'
import { TApiRequest } from "./types";
import useCache from "../useCache";

function useApiRequestClient<T extends TApiInstanceKeys>(
	schema: T, 
	...params: Parameters<GetByDotKey<TApiInstance, T>>
){
	const api = useApi();
	const fn = getByDotKey(api, schema);
	const cache = useCache();
	const key = JSON.stringify(params);
	type Res = Awaited<ReturnType<typeof fn>>;

	const fromCache = cache.data[schema]?.[key];	
	const initial: TApiRequest<Res> = fromCache ? {
		done: true,
		success: true,
		data: fromCache,
		error: null
	}
	: { 
		done: false, 
		success: false, 
		data: null, 
		error: null 
	}; 

	const [ result, setResult ] = useState<TApiRequest<Res>>(initial);

	useEffect(() => {
		if(!initial.done){
			runFnWithTuple(fn, params)
				.then(data => setResult({
					done: true,
					success: true,
					data: data as Res,
					error: null
				}))
				.catch((e: Error) => setResult({
					done: true,
					success: false,
					data: null,
					error: e
				}))
		}
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return result;
}

export default useApiRequestClient;