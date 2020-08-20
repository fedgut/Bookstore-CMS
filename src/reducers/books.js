const createBook = (state, action) => [
  ...state,
  {
    id: action.id,
    title: action.title,
    category: action.category,
  },
];

const removeBook = (state, action) => state.filter(book => book.id !== action.id);

const getRandomInt = () => Math.floor(Math.random() * Math.floor(214748364));

const initialBookState = [
  {
    id: getRandomInt(),
    title: 'Fahrenheit 451',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: '1984',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Dr. Frankesntein',
    category: 'Sci-Fi',
  },
  {
    id: getRandomInt(),
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: getRandomInt(),
    title: 'Metodos Numericos Para Ingenieria',
    category: 'Learning',
  },
];

const books = (state = initialBookState, action = '') => {
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
