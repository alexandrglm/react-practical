import { useState } from "react";
import "./App.css";
import LifecycleCounter from "./LifecycleCounter";

function App () {
  const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>Simple State: {counter}</h1>
        <button onClick={() => { setCounter(counter + 1); }}>
          Change State
          </button>

          <LifecycleCounter />
    </div>
  );
}

export default App;