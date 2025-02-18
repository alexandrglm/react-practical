import React, { Component } from "react";
import Login from "./Login";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = { login: "", password: "" }
      }

    onChange1(event) {
        this.setState({login: event.target.value});
      }

    onChange2(value) {
        this.setState({password: value});
    }

  render() {
    return <div>
        <div>{`Login: ${this.state.login}`}</div>
        <div>{`Password: ${this.state.password}`}</div>
        <Login 
            type1="text" 
            type2="password"
            onChange1={this.onChange1.bind(this)}
            onChange2={this.onChange2.bind(this)}
        />
      </div>;
  }
}

export default LoginForm;