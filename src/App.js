import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateReport from './components/CreateReport';
import Machines from './components/Machines';
import Locations from './components/Locations';
import Products from './components/Products';
import Media from './components/Media';
import UserManagement from './components/UserManagement';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={CreateReport} />
          <Route exact path='/machines' component={Machines} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/media' component={Media} />
          <Route exact path='/usermanagement' component={UserManagement} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
