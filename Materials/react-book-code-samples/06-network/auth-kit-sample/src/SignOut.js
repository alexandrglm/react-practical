import { Link } from 'react-router-dom';
import './App.css';

function SignOut () {
    return (
        <div className="App">
            <h1>You Signed out!</h1>
            <div><Link to="/">Go Home</Link></div>
            <div><Link to="/protected">Go to protected?</Link></div>
        </div>
    )
}

export default SignOut;