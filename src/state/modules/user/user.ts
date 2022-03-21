import { Action } from '../../d/reducers';
import { UserState } from './d/user';
import { ACTION_SET_USERTYPE } from './user.constants';

export const userTypes = ['Admin', 'Registrar'];

export const INITIAL_STATE_USER:UserState = {
  user: { type: userTypes[0] }
};

export function userReducer(state:UserState, action:Action) {
  // eslint-disable-next-line no-console
  console.log(action);
  switch (action.type) {
    case ACTION_SET_USERTYPE: {
      return {
        ...state,
        user: { type: action.payload }
      };
    }
    default:
      return state;
  }
}
