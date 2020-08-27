import React from 'react';
import { PropTypes } from 'prop-types';
import { CATEGORIES } from '../constants';

export default function CategoryFilter(props) {
  const { handleChange } = props;
  return (
    <select onChange={handleChange}>
      {['All', ...CATEGORIES].map(category => (
        <option key={category} value={`${category}`}>
          {category}
        </option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
