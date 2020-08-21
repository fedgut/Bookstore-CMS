
import React from 'react';

const BookForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <form>
        <input type="text" name="title" id="title" placeholder="Title" />
        <select name="category" id="category">
          {categories.map(category => (
            <option key={`${category}`} value={`${category}`}>
              {`${category}`}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
