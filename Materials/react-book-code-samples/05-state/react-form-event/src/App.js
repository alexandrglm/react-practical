import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('default value');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{name}</h1>
      </header>
      <p className="App-intro">
        <div><label>Sample text</label></div>
        <div>
          <input type="text"
            value={name}
            defaultValue="default text"
            onChange={handleChange} 
          />
        </div>
      </p>
    </div>
  );
}

export default App;
