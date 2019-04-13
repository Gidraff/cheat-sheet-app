import React from 'react';
import { shallow } from 'enzyme';
import { ManageRegisterPage } from '../components/auth/ManageRegisterPage';

function setup() {
  const props = {
    authActions: {
      registerUser: jest.fn(),
    },
    auth: {}
  };
  const wrapper = shallow(
    <ManageRegisterPage {...props}
    />);

  return {props,wrapper};
}

it('should render a RegisterForm without crushing', () => {
  const { wrapper } = setup();
  expect(wrapper.find('RegisterForm')).toHaveLength(1);
  const RegisterFormProps = wrapper.find('RegisterForm').props();
  expect(RegisterFormProps.isDisabled).toBe(false);
  expect(RegisterFormProps.formErrors.username).toBe('');
  expect(RegisterFormProps.formErrors.email).toBe('');
  expect(RegisterFormProps.formErrors.password).toBe('');
  expect(RegisterFormProps.formErrors.confirm).toBe('');
});
