import generateId from '../helpers/getRandomInt';

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const createBook = book => ({
  type: 'CREATE_BOOK',
  book: { id: generateId(), ...book },
});
