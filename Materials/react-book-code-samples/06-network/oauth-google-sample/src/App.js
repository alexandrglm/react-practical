import { useState } from 'react';
import { GoogleLogin, hasGrantedAnyScopeGoogle } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import './App.css';
import CustomButton from './CustomButton';


function Home () {
    const [user, setUser] = useState()
    const handleLogin = credentialResponse => {
        console.log(credentialResponse);
        const hasAccess = hasGrantedAnyScopeGoogle(
            credentialResponse,
            'email',
            'profile',
          );
        const decoded = jwtDecode(credentialResponse.credential)
        console.log(hasAccess, credentialResponse, decoded);
        setUser(decoded);
    }

    const handleError = () => {
        console.log('Login Failed');
    }
    return (
        <div className="App">
            <h1>This is Home</h1>
            <div>{user && <span>{user.given_name}</span>}</div>
            <GoogleLogin onSuccess={handleLogin} onError={handleError} />
            <CustomButton />
        </div>
    )
}

export default Home;