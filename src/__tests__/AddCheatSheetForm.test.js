import React from 'react';
import { shallow } from 'enzyme';
import { AddCheatSheetForm } from '../components/cheatsheet/AddCheatSheetForm';

function setup() {
  const props = {
    cheatActions: {
      createCheatSheet: jest.fn(),
    },
    singleCheat: {}
  };
  const wrapper = shallow(
    <AddCheatSheetForm {...props}
    />);

  return {props,wrapper};
}

it('should render a RegisterForm without crushing', () => {
  const { wrapper } = setup();
  expect(wrapper.find('form')).toHaveLength(1);
  const FormErrorsProps = wrapper.find('FormErrors').props();
  expect(FormErrorsProps.formErrors.title).toBe('');
  expect(wrapper.find('FormErrors')).toHaveLength(1);
  expect(wrapper.find('TextInput')).toHaveLength(1);
  expect(wrapper.find('button')).toHaveLength(2);
  expect(wrapper.find('button').first().text()).toBe('Add cheat');
  expect(wrapper.find('button').last().text()).toBe('Cancel');
});
