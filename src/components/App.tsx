import { useRoutes } from "react-router-dom";
import routes from "../router";


function App() {
  const view = useRoutes(routes);

  return (
    <div className="container mt-2">
      <h1>Hello React!</h1>
      <hr/>
      {view}
    </div>
  )
}


export default App
