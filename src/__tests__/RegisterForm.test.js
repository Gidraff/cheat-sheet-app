import React from 'react';
import { RegisterForm } from '../components/auth/RegisterForm';
import { shallow } from 'enzyme';

it('renders a Register Form', () => {
  const handleOnChange = jest.fn();
  const handleOnSubmit = jest.fn();
  const formErrors = {email: '', password: ''};
  const isDisabled = false;

  const wrapper = shallow(
    <RegisterForm
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      formErrors={formErrors}
      isDisabled={isDisabled}
    />
  );
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper.find('h3')).toHaveLength(1);
  expect(wrapper.find('h3').text()).toBe('Register');
  expect(wrapper.find('FormErrors')).toHaveLength(1);
  expect(wrapper.find('EmailInput')).toHaveLength(1);
  expect(wrapper.find('PasswordInput')).toHaveLength(1);
  expect(wrapper.find('ConfirmPasswordInput')).toHaveLength(1);
  expect(wrapper.find('button')).toHaveLength(1);
});
