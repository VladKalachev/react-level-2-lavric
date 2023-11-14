import { observer } from "mobx-react";
import { useContext, useState } from "react"
import storeContext from "../contexts/store";

function App() {
  const [count, setCount] = useState(0);
  const store = useContext(storeContext);
  
  return (
    <div>
      Hello React! {count} <br/>
      <button type="button" onClick={() => setCount(count + 1)}>1 +</button>
      <hr/>
      <>{store.user.id}</>
    </div>
  )
}

const observedApp = observer(App);

export default observedApp
