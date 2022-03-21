/* eslint-disable import/prefer-default-export */
import { Action } from '../../d/reducers';
import { ACTION_SET_USERTYPE } from './user.constants';

export const setUserType = (q:string):Action => ({
  type: ACTION_SET_USERTYPE,
  payload: q
});
