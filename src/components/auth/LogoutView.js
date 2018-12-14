import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

class LogoutView extends Component {

  componentWillMount() {
    const {history} =  this.props;
    this.props.authActions.logoutUser(history);
  }

  render(){
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(null, mapDispatchToProps)(withRouter(LogoutView));
