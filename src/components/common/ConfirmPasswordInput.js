import React from 'react';
import PropTypes from 'prop-types';

const ConfirmPasswordInput = ({name, label, onChange, value, formErrors}) => {
  let wrapperClass = 'form-group';
  if (formErrors && formErrors.confirm.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <input
          type="password"
          required
          name={name}
          className='form-control'
          placeholder='Confirm Password'
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

ConfirmPasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  formErrors: PropTypes.object.isRequired
};

export default ConfirmPasswordInput;
