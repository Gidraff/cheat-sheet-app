import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

class NavigationBar extends Component {
  navBarLinks() {
    const { _id } = this.props.singleCheat;
    if(this.props.auth.isAuthenticated) {
      return (
        <div className="nav_menu">
          <Link className="nav_link"
            to="/cheats">
            <b>
              {this.props.auth.user.username}
            </b>
          </Link>
          <div
            className='topnav-right'>
            <Link
              className="nav_link"
              to={
                 _id ?
                `/cheats/${_id}/add-command` :
                "/createCheat"
                }>
             { _id ? '+ Command' : '+ Cheat' }
            </Link>
            <Link
              className="nav_link"
              onClick={this.handleLogout}
              to="/logout">Logout</Link>
          </div>
        </div>
      );
    }
    return (
      <div
        className="nav_menu">
        <div
          className="topnav-right">
          <Link
            className="nav_link" to="/">
            Register
          </Link>
          <Link
            className="nav_link"
            to="/Login">Login</Link>
        </div>
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


NavigationBar.propTypes = {
  singleCheat: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    singleCheat: state.singleCheat,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
