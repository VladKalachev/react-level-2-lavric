import { createContext } from "react";

const cacheContext = createContext<Record<string,unknown>>({});

export default cacheContext;