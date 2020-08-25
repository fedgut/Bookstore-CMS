import generateId from '../helpers/getRandomInt';

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const createBook = book => ({
  type: 'ADD_BOOK',
  book: { id: generateId(), ...book },
});
