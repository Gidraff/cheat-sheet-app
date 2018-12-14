import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';
import LoginForm from './LoginForm';

class ManageLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrors: {
        password: '',
        email: ''
      }
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'is not valid.';
      break;
    case 'password':
      passwordValid = value.trim().length >= 8;
      fieldValidationErrors.password = passwordValid ? '' : 'should be at least 8 characters.';
      break;
    default:
      break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value)});
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    const userData = {
      email: email,
      password: password
    }
    this.props.authActions.loginUser(userData, this.props.history)
  }

  render(){
    console.log("login props", this.props);
    const isDisabled = this.state.formValid
    return (
      <div className='auth-form-container'>
        <LoginForm
          isDisabled={isDisabled}
          formErrors={this.state.formErrors}
          errorClass={this.errorClass}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageLoginPage));
