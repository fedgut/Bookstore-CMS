import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CATEGORIES } from '../constants';
import { changeFilter } from '../reducers/filters';

class CategoryFilter extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.categories = CATEGORIES;
  }

  handleChange(event) {
    const { changeFilter } = this.props;
    const category = event.target.value;
    changeFilter(category);
  }

  render() {
    return (
      <select />
    );
  }
}

const mapStateToProps = state => ({
  books: state.category,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
