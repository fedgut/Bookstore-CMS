import filters from './filters';

const sciFiFilter = {
  type: 'CHANGE_FILTER',
  category: 'Sci-Fi',
};

const actionFilter = {
  type: 'CHANGE_FILTER',
  category: 'Action',
};

it('filter Sci-Fi books', () => {
  expect(filters('', sciFiFilter)).toEqual('Sci-Fi');
});

it('filter action books', () => {
  expect(filters('', actionFilter)).toEqual('Action');
});
