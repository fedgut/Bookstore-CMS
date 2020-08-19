const createBook = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      title: action.title,
      category: action.category,
    },
  ];
};

const removeBook = (state, action) => state.filter(book => book.id !== action.id);

const books = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return createBook(state, action);
    case 'REMOVE_BOOK':
      return removeBook(state, action);
    default:
      return state;
  }
};

export default books;
