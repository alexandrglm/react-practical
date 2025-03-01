import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    login: "",
    password: "",
    loginValid: true,
    passwordValid: true
  });

  const handleSubmit =  (e) => {
    e.preventDefault();
    this.setState({
      login: "",
      password: "",
      loginValid: true,
      loginError: '',
      passwordValid: true,
      passwordError: ''
    })
  }

  const isLoginValid = (login) => (login.length > 2);
  const isPasswordValid = (password) => (password.length > 7);

  const loginCheck = (event) => {
    const target = event.target;

    setState({
      ...state,
      [target.name]: target.value,
      loginValid: isLoginValid(target.value),
      loginError: isLoginValid(target.value)?"":<div className="error">Login not valid</div>,

    });
  }

  const passwordCheck = (event) => {
    const target = event.target;

    setState({
      ...state,
      [target.name]: target.value,
      passwordValid: isPasswordValid(target.value),
      passwordError: isPasswordValid(target.value)?"":<div className="error">Password not valid</div>,
    });
  }

  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Login form validation</h1>
    </header>
    <div>
      <form onSubmit={handleSubmit}>
      <div><label>Login</label></div>
          {state.loginError}
        <div>
        <input type="text" name="login" onBlur={loginCheck} />
      </div>

      <div><label>Password</label></div>
          {state.passwordError}
        <div>
        <input type="password" name="password" onBlur={passwordCheck} />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
      </form>
    </div>
    <div>Login: {state.login}, password: {state.password}</div>
  </div>
  );
}

export default App;
