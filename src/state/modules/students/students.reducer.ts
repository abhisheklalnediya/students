import { Action } from '../../reducers.d';
import { StudentState } from './students';
import { ACTION_SET_SEARCH } from './students.constants';

export const INITIAL_STATE_STUDENT:StudentState = {
  students: [],
  searchQuery: ''
};

export function studentsReducer(state:StudentState, action:Action) {
  // eslint-disable-next-line no-console
  console.log(state);
  switch (action.type) {
    case ACTION_SET_SEARCH:
      return {
        ...state, searchQuery: action.payload
      };

    default:
      break;
  }
  return state;
}
