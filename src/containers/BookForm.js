import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
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

  render() {
    const { category, title } = this.state;
    const { handleSubmit } = this.props;
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
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit(title, category)}
          />
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: (title, category) => dispatch(createBook({ title, category })),
  };
}

export default connect(null, mapDispatchToProps)(BookForm);
