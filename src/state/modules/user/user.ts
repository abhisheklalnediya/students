import { Action } from '../../reducers.d';
import { UserState } from './user.d';

export const INITIAL_STATE_USER:UserState = {
  user: { type: 'admin' }
};

export function userReducer(state:UserState, action:Action) {
  // eslint-disable-next-line no-console
  console.log(action);
  return state;
}
