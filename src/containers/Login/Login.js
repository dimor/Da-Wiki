import classes from "./Login.module.css";
import Logo from '../../components/Logo/Logo';
import firebase from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Roller } from 'react-spinners-css';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import * as constants from '../../constants';

const Login = () => {

    const user = firebase.auth().currentUser;

    const dispatch = useDispatch();

    const onSignIn = (provider, firebase) => dispatch(actions.signIn(provider, firebase));

    const isLoading = useSelector(state => state.auth.isLoading);


    return (
        <React.Fragment>
            {user ? <Redirect to="/" /> : null}
            <div className={classes.Wrapper}>
                <div className={classes.Login} >
                    {isLoading ? <Roller color="#fffff" style={{ padding: '24px' }} /> : <Logo />}
                    <FacebookLoginButton style={{fontSize:'1rem'}} align="right" className={classes.social} onClick={() => onSignIn(firebase.auth.FacebookAuthProvider, firebase)} >
                        {constants.LOGIN_FACEBOOK}
                   </FacebookLoginButton>
                    <GoogleLoginButton style={{fontSize:'1rem'}} align="right" className={classes.social} onClick={() => onSignIn(firebase.auth.GoogleAuthProvider, firebase)} >
                    {constants.LOGIN_GOOGLE}
                    </GoogleLoginButton>
                </div>
            </div>
        </React.Fragment>



    )






}

export default Login;