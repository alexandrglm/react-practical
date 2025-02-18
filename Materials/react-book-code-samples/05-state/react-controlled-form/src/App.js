import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [maritalState, setMaritalState] = useState('');
  const [studies, setStudies] = useState([]);
  const [sex, setSex] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value);
  }

  const handlePassword = event => {
    setPassword(event.target.value);
  }

  const handleDescription= event => {
    setDescription(event.target.value);
  }


  const handleMaritalState = event => {
    setMaritalState(event.target.value);
  }

  const handleChangeStudies = event => {
    const changedStudies = new Set(studies)
    const {checked, value} = event.target;
    if (checked) 
      changedStudies.add(value)
    else
      changedStudies.delete(value)
    
    setStudies(Array.from(changedStudies));
  }

  const handleSex = event => {
    setSex(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    alert("Form submitted")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Login form</h1>
      </header>
      <div className="App-form">
        <form onSubmit={handleSubmit} name="form">
        <div><label>Username</label></div>
        <div>
          <input type="text" name="username" onChange={handleUsername} value={username}/>
        </div>
        <div><label>Password</label></div>
        <div>
          <input type="password" name="password" onChange={handlePassword} value={password}/>
        </div>
        <div><label>Description</label></div>
        <div>
          <textarea name="description" onChange={handleDescription} value={description}></textarea> 
        </div>
        <div><label>Marital State</label></div>
        <div>
          <select name="maritalState" onChange={handleMaritalState} value={maritalState}>
            <option value="1">Single</option>
            <option value="2">Multiple</option>
            <option value="3">Married</option>
          </select> 
        </div>
        <div><label>Studies</label></div>
        <div>
          <div><input type="checkbox" name="studies" onChange={handleChangeStudies}  value="primary" id="s_primary" />
          <label htmlFor="s_primary">Primary</label></div>
          <div><input type="checkbox" name="studies" onChange={handleChangeStudies}  value="bachelor" id="s_bachelor" />
          <label htmlFor="s_bachelor">Bachelor</label></div>
          <div><input type="checkbox" name="studies" onChange={handleChangeStudies} value="master" id="s_master" />
          <label htmlFor="s_master">Master</label></div>
        </div>
        <div><label>Sex</label></div>
        <div>
          <div><input type="radio" name="sex" value="male" id="male" onChange={handleSex}  />
          <label htmlFor="male">Male</label></div>
          <div><input type="radio" name="sex" value="female" id="female" onChange={handleSex}  />
          <label htmlFor="female">Female</label></div>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
        </form>
        <div>
          <div><b>Username:</b> {username}</div>
          <div><b>Password:</b> {password}</div>
          <div><b>Description:</b> {description}</div>
          <div><b>MaritalState:</b> {maritalState}</div>
          <div><b>Studies:</b> {studies}</div>
          <div><b>Sex:</b> {sex}</div>
        </div>
        </div>

    </div>
  )
}

export default App;
