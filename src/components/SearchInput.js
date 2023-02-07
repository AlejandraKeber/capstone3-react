import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ search, handleChange }) => (
  <div>
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleChange}
    />
  </div>
);

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
