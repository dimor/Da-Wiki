import Layout from './containers/Layout/Layout';
import './App.css';
import Home from './containers/Home/Home';
import { Route } from 'react-router-dom';
import Login from './containers/Login/Login';


const App=()=> {
  return (

    <div className="App">
      <Layout>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/Login'} component={Login} />
      </Layout>
    </div>
  );
}

export default App;
