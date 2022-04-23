import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth, provider} from "./Firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    // creating a function for Sign In
    const signIn=() =>{
        // signing in
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                
                <img
                src={require('./logo.png')}
                alt=""
                />
                <div className='logo2'>
                <img
                src={require('./logo2.png')}
                alt=""
                />  
                </div>
                
                

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <div className='logo_pever'>
                <img
                src={require('./scriptiez1.png')}
                alt=""
                />  
                </div>

        </div>
    );
}

export default Login
