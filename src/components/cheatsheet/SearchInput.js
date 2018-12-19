import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handleOnChange, value}) => {
  if(localStorage.getItem('token')) {
    return (
      <div class="main_search">
        <form>
          <div
            class="form-group has-feedback has-search">
            <input
              type="text"
              value={value}
              name="search"
              class="form-control"
              placeholder="Search"
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
  return '';
};

SearchInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchInput;
