import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCHtXKucL5fFLpYww64gWWwRXc6N-dSuSc",
    authDomain: "dawiki-26d16.firebaseapp.com",
    databaseURL: "https://dawiki-26d16.firebaseio.com",
    projectId: "dawiki-26d16",
    storageBucket: "dawiki-26d16.appspot.com",
    messagingSenderId: "627680418064",
    appId: "1:627680418064:web:901596b75059aae9486d95",
    measurementId: "G-QE4LNHB1Z3"
  };
  

    const firebaseInstance = firebase.initializeApp(firebaseConfig);
    

  export default firebaseInstance;