import logo from './logo.svg';
import { useState } from "react";
import './App.css';


function ComplexStateApp () {
  const [state, setState] = useState({
    title: "Default",
    time: new Date().toLocaleTimeString(),
    number: 0,
    numbers: [] 
   });


const changeState = () => {
  let number = Math.round(Math.random() * 4);
  let numbers = state.numbers;
  numbers.push(number);
  setState({
      time: new Date().toLocaleTimeString(),
      numbers: numbers,
      number: number,
      title: ((number % 2 === 0)?"It is even":"It is odd")
    })
  console.log("changeState> ", state);
}

  console.log("Render was called> ", state);
  const colors = ["red", "yellow", "green", "blue","orange"];

  return (
    <div className="App" style={{backgroundColor: colors[state.number]}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          {state.title} - {state.number}
        </h1>
      </header>
      <div className="App-intro">
        <div>{state.time}</div>
        Press this button to change state
        <div><button onClick={changeState}>
          Change state
         </button>
         </div>
         <div>
           Generated numbers
           <ul>
             {state.numbers.map((x) => (
               <li key={x}>{x}</li>
             ))}
             </ul>
           </div>
      </div>
    </div>
  );
}

export default App;