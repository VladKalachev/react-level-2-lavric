import { observer } from "mobx-react";
import { useContext, useState } from "react"
import storeContext from "../contexts/store";
import { Link, useRoutes } from "react-router-dom";
import routes from "../router";


function App() {
  const [count, setCount] = useState(0);
  const store = useContext(storeContext);
  const view = useRoutes(routes);

  return (
    <div>
      Hello React! {count} <br/>
      <Link to='/'>Page A</Link>
      <Link to='/2'>Page B</Link>
      <hr/>
      <button type="button" onClick={() => setCount(count + 1)}>1 +</button>
      <hr/>
      <>{store.user.id}</>
      <hr/>
      {view}
    </div>
  )
}

const observedApp = observer(App);

export default observedApp
