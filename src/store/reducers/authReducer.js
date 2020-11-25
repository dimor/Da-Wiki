

const INITIAL_STATE ={
    uid:'',
    displayName:'',
    email:'',
    photoURL:'',
    token:''
}



const authReducer = (state=INITIAL_STATE , action) =>{



    switch(action.type){

        default:
            return state;

    }
}

export default authReducer;