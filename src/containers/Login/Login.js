import classes from "./Login.module.css";
import Logo from '../../components/Logo/Logo';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Roller } from 'react-spinners-css';

const Login = (props) => {

    const dispatch = useDispatch();
    const onSignIn = (provider, firebase, history) => dispatch(actions.signIn(provider, firebase, history))

    const isLoading = useSelector(state => state.auth.isLoading);
    
    const {history} = props;


    return (
        <div className={classes.Wrapper}>
            <div className={classes.Login} >
                {isLoading ? <Roller color="#fffff" style={{ padding: '24px' }} /> : <Logo />}
                <button onClick={() => onSignIn(firebase.auth.FacebookAuthProvider, firebase, history)}>Facebook</button>
                <button onClick={() => onSignIn(firebase.auth.GoogleAuthProvider, firebase, history)}>Google</button>
            </div>


        </div>

    )






}

export default Login;