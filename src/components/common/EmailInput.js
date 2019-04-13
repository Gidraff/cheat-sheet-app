import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({name, label, onChange, value, formErrors}) => {
  let wrapperClass = 'form-group';
  if (formErrors && formErrors.email.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <label
        htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <input
          type="text"
          required
          name={name}
          className='form-control'
          placeholder='johndoe@email.com'
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  formErrors: PropTypes.object.isRequired
};

export default EmailInput;
