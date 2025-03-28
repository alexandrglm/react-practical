import React from 'react';
import {useIsAuthenticated, useSignIn} from 'react-auth-kit';
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
    const loginHandler = () => {
      // Assuming that, all network Request is successfull, and the user is authenticated
  
      if (signIn({
        token: '35v3443bn368367n306306wbn407qn420b436b4', //Just a random token
        tokenType: 'Bearer',    // Token type set as Bearer
        authState: {name: 'React User', uid: 123456},   // Dummy auth user state
        expiresIn: 120  // Token Expriration time, in minutes
      })) {
        // If Login Successfull, then Redirect the user to secure route
        navigate('/protected')
      } else {
        // Else, there must be some error. So, throw an error
        alert("Error Occoured. Try Again")
      }
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
            <button onClick={loginHandler}>Sign In!!</button>
        </div>
      )
    }
}

export default SignIn;