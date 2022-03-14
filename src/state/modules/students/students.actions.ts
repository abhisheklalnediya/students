import { Action } from '../../reducers.d';
import { ACTION_SET_SEARCH } from './students.constants';

// eslint-disable-next-line import/prefer-default-export
export const setSearch = (q:string):Action => ({
  type: ACTION_SET_SEARCH,
  payload: q
});
