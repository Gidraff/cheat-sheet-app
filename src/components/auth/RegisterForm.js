import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';
import ConfirmPasswordInput from '../common/ConfirmPasswordInput';
import { FormErrors } from '../common/FormErrors';

export const RegisterForm = ({ handleOnChange, handleOnSubmit, formErrors, isDisabled }) => {
	return (
		<form className="login-form" onSubmit={handleOnSubmit}>
			<h3>Register</h3>
			<FormErrors formErrors={formErrors} />
			<br />
			<TextInput
				name="username"
				label="Username"
				placeholder="Username"
				formErrors={formErrors}
				onChange={handleOnChange}
			/>

			<EmailInput
				name="email"
				label="Email"
				placeholder="Email"
				formErrors={formErrors}
				onChange={handleOnChange}
			/>

			<PasswordInput
				name="password"
				label="Password"
				placeholder="Password"
				formErrors={formErrors}
				onChange={handleOnChange}
			/>

			<ConfirmPasswordInput
				name="confirm"
				label="Confirm password"
				placeholder="Confirm"
				formErrors={formErrors}
				onChange={handleOnChange}
			/>
			<button type="submit" className="btn btn-success" disabled={!isDisabled}>
				Register
			</button>
		</form>
	);
};

RegisterForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	formErrors: PropTypes.object.isRequired,
	isDisabled: PropTypes.bool.isRequired
};

export default RegisterForm;
