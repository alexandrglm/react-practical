import { Link , useNavigate} from 'react-router-dom';
import './App.css';

function Home () {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1>This is Home</h1>
            <div><Link to="/signin">Go to Sign In</Link></div>
            <div><Link to="/protected">Go to protected</Link></div>
            <button onClick={()=> navigate('/signout')}>
                Go to Protected programatically
            </button>
            <div><Link to="/signout">Go to Sign Out</Link></div>
        </div>
    )
}

export default Home;