import { createContext } from "react";
import { TApiInstance, TApiInstanceKeys } from "../api";
import { GetByDotKey } from "../types/utility/objects";

type CacheBase = {
	[k in TApiInstanceKeys]: ReturnType<GetByDotKey<TApiInstance, k>>
}

//[k in keyof CacheBase]: Record<string, CacheBase[k]>

export type CacheAwaiting = Partial<{
	[k in keyof CacheBase]: Record<string, unknown>
}>

export type CacheData = Partial<{
	[k in keyof CacheBase]: Record<string, Awaited<CacheBase[k]>>
}>

/* {
	'products.one': {
		'[100]': TProduct[],
		'[200]': TProduct[],
	}
}
 */
export interface Cache{
	data: CacheData,
	awaiting: CacheAwaiting
}

const cacheContext = createContext<Cache | null>(null);

export default cacheContext;