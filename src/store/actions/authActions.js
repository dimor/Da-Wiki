
import { setForward } from './actions';
import * as actionTypes from './actionTypes';
import * as actions from './index'

export const signInStart = () => {

    return { type: actionTypes.SIGN_IN_START }

}

export const signInFailed = () => {

    return { type: actionTypes.SIGN_IN_FAILED }

}

export const signInSuccess = (user) => {

    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        user:user
    }

}



export const signOutStart = () => {

    return { type: actionTypes.SIGN_OUT_START }

}

export const signOutFailed = () => {

    return { type: actionTypes.SIGN_OUT_FAILED }
 
}

export const signOutSuccess = () => {

    return { type: actionTypes.SIGN_OUT_SUCCESS }

}



export const signOut = (firebase) => dispatch => {

    dispatch(signOutStart());
    firebase.auth().signOut()
    .then(()=> {
        dispatch(actions.clearFavoriteUserIds())
        dispatch(signOutSuccess())
      }).catch(error=> {
        dispatch(signOutFailed(error));
      });
}



export const signIn = (providerName, firebase) => dispatch => {

    dispatch(signInStart())
    
        let provider = new providerName();


    console.log(firebase);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(()=> {
      return firebase.auth().signInWithPopup(provider)
          .then((result) => {
              dispatch(signInSuccess(result.user))
          }).catch(error => {
              const errorMessage = error.message;
              dispatch(signInFailed(errorMessage))
              console.log(errorMessage);
          });
    })
    .catch(function(error) {
      var errorMessage = error.message;
      console.log(errorMessage);
      dispatch(signInFailed(errorMessage))
    });


}

