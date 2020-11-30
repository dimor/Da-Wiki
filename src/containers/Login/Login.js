import classes from "./Login.module.css";
import Logo from '../../components/Logo/Logo';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Roller } from 'react-spinners-css';
import { Redirect } from 'react-router-dom';
import React from 'react';


const Login = (props) => {

   const user = firebase.auth().currentUser;

    const dispatch = useDispatch();
    const onSignIn = (provider, firebase, history) => dispatch(actions.signIn(provider, firebase, history))

    const isLoading = useSelector(state => state.auth.isLoading);

    const { history } = props;


    return (
        <React.Fragment>
        {user?<Redirect to="/" />:null}
        <div className={classes.Wrapper}>
            <div className={classes.Login} >
                {isLoading ? <Roller color="#fffff" style={{ padding: '24px' }} /> : <Logo />}
                <button onClick={() => onSignIn(firebase.auth.FacebookAuthProvider, firebase, history)}>Facebook</button>
                <button onClick={() => onSignIn(firebase.auth.GoogleAuthProvider, firebase, history)}>Google</button>
            </div>


        </div>
        </React.Fragment>
       


    )






}

export default Login;