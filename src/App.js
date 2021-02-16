import Layout from './containers/Layout/Layout';
import './App.css';
import Home from './containers/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';
import Favorites from './containers/Favorites/Favorites';
//import NotFound from './containers/NotFound/NotFound';


const App=()=> {

  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route exact path={'/'} component={Home} />
        <Route  path={'/Login'} component={Login} />
        <Route  path={'/Favorites'} component={Favorites} />
        <Route path={'*'} component={Home} />
        </Switch>

      </Layout>
    </div>
  );
}

export default App;
