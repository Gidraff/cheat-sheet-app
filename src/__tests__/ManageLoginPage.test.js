import React from 'react';
import { ManageLoginPage } from '../components/auth/ManageLoginPage';
import { shallow } from 'enzyme';

function setup() {
  const props = {
    authActions: {
      loginUser: jest.fn(),
    },
    auth: {}
  };
  const wrapper = shallow(
    <ManageLoginPage {...props}
    />);

  return {props,wrapper};
}

it('should render LoginForm without crashing', () => {
  const { wrapper } = setup();
  const LoginFormProps = wrapper.find('LoginForm').props();
  expect(wrapper.find('div')).toHaveLength(1);
  expect(LoginFormProps.isDisabled).toBe(false);
  expect(LoginFormProps.formErrors.email).toBe('');
  expect(LoginFormProps.formErrors.password).toBe('');
});
