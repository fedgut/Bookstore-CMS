import { CHANGE_FILTER } from '../constants';

const initialFilterState = '';

const changeFilter = (state, action) => String(action.category);

function filters(state = initialFilterState, action = '') {
  switch (action.type) {
    case CHANGE_FILTER:
      return changeFilter(state, action);
    default:
      return state;
  }
}

export default filters;
