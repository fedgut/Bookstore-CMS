import React from 'react';
import { PropTypes } from 'prop-types';
import { CATEGORIES } from '../constants';

export default class CategoryFilter extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.props = props;
  }

  render() {
    const { handleChange } = this.props;
    return (
      <select onChange={handleChange}>
        {CATEGORIES.map(category => (
          <option key={category} value={`${category}`}>
            {category}
          </option>
        ))}
      </select>
    );
  }
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
