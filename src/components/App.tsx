import { useRoutes } from "react-router-dom";
import { routesNative } from "../router";
import { useEffect } from "react";
import useCache from "../hooks/useCache";


function App() {
  const view = useRoutes(routesNative);
  const cache = useCache();

	useEffect(() => {
		cache.data = {};
	}, [ cache ]);


  return (
    <div className="container mt-2">
      <h1>Hello React!</h1>
      <hr/>
      {view}
    </div>
  )
}


export default App
