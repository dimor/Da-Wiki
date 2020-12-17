import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer';
import authReducer from './store/reducers/authReducer';
import favoriteReducer from './store/reducers/favoriteReducer';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';



const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
  indx : reducer,
  auth : authReducer,
  favorite:favoriteReducer
})


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


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
