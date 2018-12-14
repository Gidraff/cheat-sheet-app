import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ManageRegisterPage from './components/auth/ManageRegisterPage';
import ManageLoginPage from './components/auth/ManageLoginPage';
import ManageCheatSheetPage from './components/cheatsheet/ManageCheatSheetPage';
import AddCheatSheetForm from './components/cheatsheet/AddCheatSheetForm';
import CheatSheetCommandPage from './components/cheatsheet/CheatSheetCommandPage';
import NavigationBar from './components/auth/NavigationBar';
import LogoutView from './components/auth/LogoutView';
import NotFound from './components/common/NotFound';
import SearchInput from './components/common/SearchInput';
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
          <SearchInput />
          <Switch>
            <Route exact path="/Register" component={ManageRegisterPage} />
            <Route exact path="/">
              <Redirect to="/Register" />
            </Route>
            <Route exact path="/Login" component={ManageLoginPage} />
            <SecretRoute exact path="/cheats" component={ManageCheatSheetPage} />
            <SecretRoute path="/cheats/:cheatId" component={CheatSheetCommandPage} />
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
