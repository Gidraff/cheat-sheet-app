import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ManageRegisterPage from './components/auth/ManageRegisterPage';
import ManageLoginPage from './components/auth/ManageLoginPage';
import SearchInput from './components/cheatsheet/SearchInput';
import ManageCheatSheetPage from './components/cheatsheet/ManageCheatSheetPage';
import AddCheatSheetForm from './components/cheatsheet/AddCheatSheetForm';
import ManageCheatCommandsPage from './components/command/ManageCheatCommandsPage';
import AddCheatCommandPage from './components/command/addCheatCommandPage';
import NavigationBar from './components/auth/NavigationBar';
import LogoutView from './components/auth/LogoutView';
import NotFound from './components/common/NotFound';
import Footer from './components/common/Footer';

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <NavigationBar />
          <Switch>
            <Route exact path="/Register" component={ManageRegisterPage} />
            <Route exact path="/">
              <Redirect to="/Register" />
            </Route>
            <Route exact path="/Login" component={ManageLoginPage} />
            <SecretRoute exact path="/cheats" component={ManageCheatSheetPage} />
            <SecretRoute path="/cheats/:cheatId/commands" component={ManageCheatCommandsPage} />
            <SecretRoute path="/cheats/:cheatId/add-command" component={AddCheatCommandPage} />
            <SecretRoute path="/createCheat" component={AddCheatSheetForm} />
            <SecretRoute path="/logout" component={LogoutView} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
