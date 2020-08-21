import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
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
      title: props.title,
      category: props.category
    };
  }

  render() {
    return (<div>
      <form>
        <input type="text" name="title" id="title" placeholder="Title" />
        <select name="category" id="category">
          {this.categories.map(category => (
            <option key={`${category}`} value={`${category}`}>
              {`${category}`}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  };
};

export default BookForm;
