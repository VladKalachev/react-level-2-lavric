import { observer } from "mobx-react";
import { useState } from "react"
import rootStore from "../store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello React! {count} <br/>
      <button type="button" onClick={() => setCount(count + 1)}>1 +</button>
      <hr/>
      <>{rootStore.user.id}</>
    </div>
  )
}

const observedApp = observer(App);

export default observedApp
