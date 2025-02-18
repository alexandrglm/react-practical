import React from 'react';
import ReactDOM from 'react-dom/client';
import {AuthProvider} from 'react-auth-kit'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider authName={"_auth"} authType={"cookie"}  >
      <GoogleOAuthProvider clientId="211079127650-ckknqcbcc33rmb9pqdkdfb8308sm5k5f.apps.googleusercontent.com"> 
        <App /> 
      </GoogleOAuthProvider>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
