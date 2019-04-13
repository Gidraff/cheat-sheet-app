import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';

export class LogoutView extends Component {

  componentWillMount() {
    const {history} =  this.props;
    this.props.authActions.logoutUser(history);
  }

  render(){
    return null;
  }
}

LogoutView.propTypes = {
  authActions: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(null, mapDispatchToProps)(withRouter(LogoutView));
