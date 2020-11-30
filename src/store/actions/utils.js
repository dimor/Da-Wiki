

export const setUser =(user)=>{

    const userData = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
        token: ''
    };

   // user.getIdToken(false).then(data=>userData.token = data);
    userData.displayName = user.displayName;
    userData.email = user.email;
    userData.photoURL = user.photoURL;
    userData.uid = user.uid;


return userData;


}