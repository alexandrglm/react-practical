import React from 'react';
import {useIsAuthenticated, useSignIn} from 'react-auth-kit';
import { GoogleLogin, hasGrantedAnyScopeGoogle } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import {useNavigate, Navigate, Link} from 'react-router-dom';
import './App.css';

function SignIn () {
    const isAuthenticated = useIsAuthenticated()
    const signIn = useSignIn()
    const navigate = useNavigate()

    /**
     * Login Handle, the callback function onClick from the "Login" button
     *
     * This function demostrate a dummy authentication, using useSignIn function
     */
    const handleLogin = (authResponse) => {
      // Assuming that, all network Request is successfull, and the user is authenticated
      console.log(authResponse);
    
      const hasAccess = hasGrantedAnyScopeGoogle(
        authResponse,
          'email',
          'profile',
        );
      const decoded = jwtDecode(authResponse.credential)
      console.log(hasAccess, authResponse, decoded);

      if (signIn({
        token: authResponse.credential, //Just a random token
        tokenType: 'Bearer',    // Token type set as Bearer
        authState: {name: decoded.given_name, uid: 123456},   // Dummy auth user state
        expiresIn: decoded.exp  // Token Expriration time, in minutes
      })) {
        // If Login Successfull, then Redirect the user to secure route
        navigate('/protected')
      } else {
        // Else, there must be some error. So, throw an error
        alert("Error Occoured. Try Again")
      }
    }

    const handleError = (error) => {
      console.log('There was an error: ', error)
    }

    console.log(isAuthenticated())
    if (isAuthenticated()) {
      // If authenticated user, then redirect to secure dashboard
  
      return (
        <Navigate to={'/protected'} replace/>
      )
    } else {
      // If not authenticated, use the login flow
      // For Demostration, I'm using just a button to login.
      // In reality, there should be a form, validation, nwetowrk request and other things
      return (
        <div className="App">
            <h1>You need to Sign In</h1>
            <div><Link to="/">Go Home</Link></div>
            <GoogleLogin onSuccess={handleLogin} onError={handleError} />
        </div>
      )
    }
}

export default SignIn;