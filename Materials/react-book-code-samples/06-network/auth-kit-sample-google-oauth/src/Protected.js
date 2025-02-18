import { Link } from 'react-router-dom'; 
import { useSignOut } from 'react-auth-kit';
import './App.css';

function Protected () {
    const signOut = useSignOut();

    return (
        <div className="App">
            <h1>This is Protected</h1>
            <button onClick={() => signOut()}>Sign Out</button>
            <div><Link to="/">Go Home</Link></div>
        </div>
    )
}

export default Protected;