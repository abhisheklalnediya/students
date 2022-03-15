import { Action } from '../../reducers.d';
import { StudentState } from './students';
import { ACTION_GET_STUDENTS, ACTION_SET_SEARCH, ACTION_SHOW_STUDENT_MODEL } from './students.constants';

export const INITIAL_STATE_STUDENT:StudentState = {
  students: [],
  fetching: true,
  searchQuery: '',
  showModel: false
};

export function studentsReducer(state:StudentState, action:Action) {
  // eslint-disable-next-line no-console
  console.log(state);
  switch (action.type) {
    case ACTION_SET_SEARCH:
      return {
        ...state,
        searchQuery: action.payload
      };
    case ACTION_GET_STUDENTS:
      return {
        ...state,
        fetching: false,
        students: action.payload
      };
    case ACTION_SHOW_STUDENT_MODEL:
      return {
        ...state,
        showModel: action.payload
      };
    default:
      break;
  }
  return state;
}
