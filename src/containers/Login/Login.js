import classes from "./Login.module.css";
import Logo from '../../components/Logo/Logo';
import firebase from 'firebase';
const Login = () => {

    const signInFaceBook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log(user, token);
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    const signInGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const token = result.credential.accessToken;
                const user = result.user;
            }).catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });

    }


    return (

        <div className={classes.Wrapper}>

            <div className={classes.Login} >
                <Logo />
                <button onClick={signInFaceBook}>Facebook</button>
                <button onClick={signInGoogle}>Google</button>
            </div>


        </div>

    )






}

export default Login;