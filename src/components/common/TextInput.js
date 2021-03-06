import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, formErrors}) => {
  let wrapperClass = 'form-group';
  if (formErrors && formErrors.username.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label
        htmlFor={name}>{label}
      </label>
      <div className="field">
        <input
          type="text"
          name={name}
          className='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  formErrors: PropTypes.object.isRequired
};

export default TextInput;
