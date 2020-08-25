import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CATEGORIES } from '../constants';
import { changeFilter } from '../actions/index';

class CategoryFilter extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { changeFilter } = this.props;
    const category = event.target.value;
    let key = '';
    if (category === CATEGORIES[0]) {
      key = '';
    } else {
      key = category;
    }
    changeFilter(key);
  }

  render() {
    return (
      <select onChange={this.handleChange}>
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
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
