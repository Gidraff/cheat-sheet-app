import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';
import RegisterForm from './RegisterForm';

class ManageRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {},
      username: '',
      email: '',
      password: '',
      confirm: '',
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmValid: false,
      formValid: false,
      formErrors: {
        username: '',
        password: '',
        email: '',
        confirm: ''
      }
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let confirmValid = this.state.confirmValid

    switch (fieldName) {
      case 'username':
        usernameValid = value.length >= 5;
        fieldValidationErrors.username = usernameValid ? '' : 'should be at least 5 characters.';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'is not valid.';
        break;
      case 'password':
        passwordValid = value.trim().length >= 8
        fieldValidationErrors.password = passwordValid ? '' : 'should be at least 8 characters.';
        break;
      case 'confirm':
        confirmValid = value.length >= 8 && value === this.state.password;
        fieldValidationErrors.confirm = confirmValid ? '' : 'do not match';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmValid: confirmValid
    }, this.validateForm)
  }

  validateForm() {
    this.setState({
      formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmValid
    })
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
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
    console.log("qwertyuio==", this.props);
    const { username, email, password, confirm} = this.state;
    console.log('statte', password, username, email);
    if(password === confirm) {
      const userData = {
        username: username,
        email: email,
        password: password
      }
      this.props.authActions.registerUser(userData, this.props.history)
    }

  }

  render(){
    const isDisabled = this.state.formValid
    return (
      <div className='auth-form-container'>
        <RegisterForm
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageRegisterPage));
