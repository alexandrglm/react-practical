import { useState, useEffect } from "react";
import "./App.css";

function LifecycleCounter () {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect called: ', counter);
    return () => {
      console.log('useEffect dismount');
    }
  }, [counter])

  return (
    <div>
        <h1>Simple State: {counter}</h1>
        <button onClick={() => { setCounter(counter + 1); }}>
          Change State
          </button>
    </div>
  );
}

export default LifecycleCounter;