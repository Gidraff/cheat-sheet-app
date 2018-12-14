import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';



class NavigationBar extends Component {
  constructor(props){
    super(props);
  }
  navBarLinks() {
    if(this.props.auth.isAuthenticated) {
      return (
        <div className="nav_menu">
          <Link className="nav_link" to="/cheats">Cheats</Link>
          <div className='topnav-right'>
            <Link className="nav_link" to="/createCheat">+ Create Cheat</Link>
            <Link className="nav_link" to="">Profile</Link>
            <Link className="nav_link" onClick={this.handleLogout} to="/logout">Logout</Link>
          </div>
        </div>
      );
    }
    return (
      <div className="nav_menu">
        <Link className="nav_link" to="/">Register</Link>
        <Link className="nav_link" to="/Login">Login</Link>
      </div>
    );
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.authActions.logoutUser(this.props.history);
  }

  render(){
    return this.navBarLinks();
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
