import React, {Component} from "react";

class Login extends Component {
    render () {
        const {type1, type2, onChange1, onChange2 } = this.props;

        return <div>
            Login: <input type={type1} onChange={onChange1} />
            Password: <input type={type2} onChange={e => onChange2(e.target.value)} />
        </div>;
    }
}

export default Login;