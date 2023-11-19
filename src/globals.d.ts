import { CacheData } from "./contexts/cache"
import { JSONRootStore } from "./store"

declare global {
	interface Window{
		appSSRData?: {
			store: JSONRootStore,
			cache: CacheData
		}
	}
}