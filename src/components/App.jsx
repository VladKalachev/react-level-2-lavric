import { observer } from "mobx-react";
import { useContext, useState } from "react"
import storeContext from "../contexts/store";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

function App() {
  const [count, setCount] = useState(0);
  const store = useContext(storeContext);

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
      <Routes>
        <Route path="/" Component={Page1}></Route>
        <Route path="/2" Component={Page2}></Route>
      </Routes>
    </div>
  )
}

const observedApp = observer(App);

export default observedApp
