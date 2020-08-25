const initialFilterState = {
  currentFilter: '',
};

const changeFilter = (state, action) => String(action.category);

const filters = (state = initialFilterState, action = '') => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return changeFilter(state, action);
    default:
      return state;
  }
};

export default filters;
