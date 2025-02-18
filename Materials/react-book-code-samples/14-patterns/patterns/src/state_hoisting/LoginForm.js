import {useState} from "react";
import Login from "./Login";

const LoginForm = () => { 
  const [login, setLogin] = useState('');
  const [password, setPassword ] = useState('');

  const onChange1 = (event) => {
    setLogin(event.target.value);
  }

  const onChange2 = (value) => {
    setPassword(value);
  }

  return <div>
      <div>{`Login: ${login}`}</div>
      <div>{`Password: ${password}`}</div>
      <Login 
          type1="text" 
          type2="password"
          onChange1={onChange1}
          onChange2={onChange2}
      />
    </div>;
}

export default LoginForm;