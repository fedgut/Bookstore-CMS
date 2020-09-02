import React from 'react';
import { PropTypes } from 'prop-types';
import { CATEGORIES } from '../constants';

export default function CategoryFilter(props) {
  const { handleChange } = props;
  return (
    <select className="categories-button" onChange={handleChange}>
      <option default value="All Books">
        CATEGORIES
      </option>
      {CATEGORIES.map(category => (
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
