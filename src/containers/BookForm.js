import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';
import { CATEGORIES } from '../constants';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { category, title } = this.state;
    const { createBook } = this.props;
    const alertTitle = document.getElementById('alert-text-title');
    const alertCategory = document.getElementById('alert-text-category');
    event.preventDefault();
    if (category && title) {
      createBook({ title, category });
      this.setState({ title: '', category: '' });
      alertTitle.classList = ['alert-hidden'];
      alertCategory.classList = ['alert-hidden'];
    } else {
      if (!title) {
        alertTitle.classList = ['alert'];
      } else {
        alertTitle.classList = ['alert-hidden'];
      }
      if (!category) {
        alertCategory.classList = ['alert'];
      } else {
        alertCategory.classList = ['alert-hidden'];
      }
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-container">
        <h2 className="add-book">ADD NEW BOOK</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            className="add-book-input"
            onChange={this.handleChange}
          />
          <select
            onChange={this.handleChange}
            name="category"
            id="category"
            value={category}
            className="category-select"
          >
            <option defaultValue> Select category </option>
            {[...CATEGORIES.slice(1)].map(category => (
              <option key={`${category}`} value={`${category}`}>
                {`${category}`}
              </option>
            ))}
          </select>
          <button type="submit" value="submit" className="add-book-button">
            Submit
          </button>
          <p id="alert-text-title" className="alert-hidden">
            Please write a title for the book you want to add.
          </p>
          <p id="alert-text-category" className="alert-hidden">
            Please select a category for the book you want to add.
          </p>
        </form>
        <p id="alert-text-title" className="alert-hidden">
          Please write a title for the book you want to add.
        </p>
        <p id="alert-text-category" className="alert-hidden">
          Please select a category for the book you want to add.
        </p>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    createBook: book => dispatch(createBook(book)),
  };
}

export default connect(null, mapDispatchToProps)(BookForm);
