import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor() {
    super();
    this.categories = [
      '',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
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
    event.preventDefault();
    createBook({ title, category });
    this.setState({ title: '', category: '' });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <select
            onChange={this.handleChange}
            name="category"
            id="category"
            value={category}
          >
            {this.categories.map(category => (
              <option key={`${category}`} value={`${category}`}>
                {`${category}`}
              </option>
            ))}
          </select>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
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
