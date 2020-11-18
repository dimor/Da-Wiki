import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";


const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

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


firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
