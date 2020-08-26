import generateId from '../helpers/getRandomInt';

const createBook = (state, action) => [
  ...state,
  {
    id: action.book.id,
    title: action.book.title,
    category: action.book.category,
  },
];

const removeBook = (state, action) => state.filter(book => book.id !== Number(action.id));

const initialBookState = [
  {
    id: generateId(),
    title: 'Fahrenheit 451',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: '1984',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: 'Brave New World',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: 'Dr. Frankesntein',
    category: 'Sci-Fi',
  },
  {
    id: generateId(),
    title: 'Dracula',
    category: 'Horror',
  },
  {
    id: generateId(),
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
