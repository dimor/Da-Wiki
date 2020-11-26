import * as actionTypes from './actionTypes';
import * as actions from './index'



export const signInStart = ()=>{

    return {type:actionTypes.SIGN_IN_START}

}

export const signInFailed = ()=>{

    return {type:actionTypes.SIGN_IN_FAILED}

}

export const signInSuccess = (userData)=>{

    return {
        type:actionTypes.SIGN_IN_SUCCESS,
        userData:userData
    }

}



export const signIn =(providerName,firebase,history)=>dispatch=>{
    
    dispatch(signInStart())


    const userData = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
        token: ''
    };

    const provider = new providerName();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            userData.token = result.credential.accessToken;
            userData.displayName = result.user.displayName;
            userData.email = result.user.email;
            userData.photoURL = result.user.photoURL;
            userData.uid = result.user.uid;
            dispatch(signInSuccess(userData))
            history.push('/')
            
        }).catch(error => {
            const errorMessage = error.message;
            dispatch(signInFailed(errorMessage))
            console.log(error);
        });






}