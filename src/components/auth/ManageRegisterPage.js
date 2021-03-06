import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authActions';
import RegisterForm from './RegisterForm';

export class ManageRegisterPage extends Component {
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
		let usernameValid = this.state.usernameValid;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		let confirmValid = this.state.confirmValid;

		switch (fieldName) {
			case 'username':
				usernameValid = value.trim().length >= 5;
				fieldValidationErrors.username = usernameValid ? '' : 'should be at least 5 characters.';
				break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : 'is not valid.';
				break;
			case 'password':
				passwordValid = value.trim().length >= 8;
				fieldValidationErrors.password = passwordValid ? '' : 'should be at least 8 characters.';
				break;
			case 'confirm':
				confirmValid = value.trim().length >= 8 && value.trim() === this.state.password.trim();
				fieldValidationErrors.confirm = confirmValid ? '' : 'do not match';
				break;
			default:
				break;
		}

		this.setState(
			{
				formErrors: fieldValidationErrors,
				usernameValid: usernameValid,
				emailValid: emailValid,
				passwordValid: passwordValid,
				confirmValid: confirmValid
			},
			this.validateForm
		);
	}

	validateForm() {
		this.setState({
			formValid:
				this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmValid
		});
	}

	handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const { username, email, password } = this.state;
		const userData = {
			username: username,
			email: email,
			password: password
		};
		this.props.authActions.registerUser(userData, this.props.history);
	};

	render() {
		const isDisabled = this.state.formValid;
		return (
			<div className="auth-form-container">
				<RegisterForm
					isDisabled={isDisabled}
					formErrors={this.state.formErrors}
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
				/>
			</div>
		);
	}
}

ManageRegisterPage.propTypes = {
	authActions: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => ({
	authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageRegisterPage));
