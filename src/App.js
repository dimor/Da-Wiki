import Layout from './containers/Layout/Layout';
import './App.css';
import Home from './containers/Home/Home';
import { Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import * as action from './store/actions/index'
import Favorites from './containers/Favorites/Favorites';

const App=()=> {


  return (
    <div className="App">
      <Layout>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/Login'} component={Login} />
        <Route exact path={'/Favorites'} component={Favorites} />
      </Layout>
    </div>
  );
}

export default App;
