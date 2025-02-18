import { useRef } from 'react';
import './App.css';

function App() {
  const loginRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit=  (e) => {
    e.preventDefault();
    console.log(loginRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">Login form</h1>
    </header>
    <div>
      <form onSubmit={handleSubmit}>
      <div><label>Login</label></div>
      <div><input type="text" ref={loginRef} /></div>
      <div><label>Password</label></div>
      <div><input type="password" ref={passwordRef} /></div>
      <div><input type="submit" value="Login" /></div>
      </form>
      </div>
    <div>Login: {loginRef.current.value}, password: {passwordRef.current.value}</div>
  </div>
  );
}

export default App;
