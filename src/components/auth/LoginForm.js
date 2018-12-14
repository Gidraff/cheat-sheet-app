import React from 'react';
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';
import {FormErrors} from '../common/FormErrors';

const LoginForm = ({ handleOnChange, handleOnSubmit, formErrors, isDisabled}) => {
  return (
    <form className='login-form' onSubmit={handleOnSubmit}>
      <h3>Login</h3>
      <FormErrors formErrors={formErrors} />
      <br/>
      <EmailInput
        name='email'
        label='Email'
        placeholder='Email'
        formErrors={formErrors}
        onChange={handleOnChange}
      />

      <PasswordInput
        name='password'
        label='Password'
        placeholder='Password'
        formErrors={formErrors}
        onChange={handleOnChange}
      />
      <button
        className='btn btn-success'
        disabled={!isDisabled}
      >Login</button>
    </form>
  );
};

export default LoginForm;
