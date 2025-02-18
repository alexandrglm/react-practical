import { Link } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import './App.css';

function Home () {
    const isAuthenticated = useIsAuthenticated()

    return (
        <div className="App">
            <h1>This is Home</h1>
            { isAuthenticated ?   
                <div>
                    <div><Link to="/protected">Go to protected</Link></div>
                    <div><Link to="/signout">Go to Sign Out</Link></div>
                </div>
                 :
                <div><Link to="/signin">Go to Sign In</Link></div>
            }
            
        </div>
    )
}

export default Home;