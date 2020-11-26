
import * as actionTypes from '../actions/actionTypes';


const INITIAL_STATE ={
    isLoading:false,
    error:'',
    userData:{
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
        token: ''
    }
}



const authReducer = (state=INITIAL_STATE , action) =>{



    switch(action.type){
        case actionTypes.SIGN_IN_START:
            return{...state, isLoading:true};
        case actionTypes.SIGN_IN_SUCCESS:
            return{...state, userData:action.userData,isLoading:false};
        case actionTypes.SIGN_IN_FAILED:{
            return{...state,error:action.error,isLoading:false}
        }
        default:
            return state;

    }
}

export default authReducer;