import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor() {
    super();
    this.categories = [
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
    if (event.target.id === 'title') {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.id === 'category') {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit() {
    const { category, title } = this.state;
    const { createBook } = this.props;
    createBook({ category, title });
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange}>
          <input type="text" name="title" id="title" placeholder="Title" />
          <select name="category" id="category">
            {this.categories.map(category => (
              <option key={`${category}`} value={`${category}`}>
                {`${category}`}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => dispatch(createBook);

export default connect(null, mapDispatchToProps)(BookForm);
