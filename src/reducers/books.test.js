import books from './books';

const stateEmpty = [];

const stateFull = [
  {
    id: 1,
    title: 'some title',
    category: 'Sci-Fi',
  },
];

const actionCreate = {
  type: 'CREATE_BOOK',
  id: 1,
  title: 'some title',
  category: 'Sci-Fi',
};

const actionRemove = {
  type: 'REMOVE_BOOK',
  id: 1,
};

it('should add a book', () => {
  expect(books(stateEmpty, actionCreate)).toEqual(stateFull);
});

it('should remove a book', () => {
  expect(books(stateFull, actionRemove)).toEqual(stateEmpty);
});
