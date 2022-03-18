import { StudentState } from './modules/students/d';
import { INITIAL_STATE_STUDENT, studentsReducer } from './modules/students/students.reducer';
import { INITIAL_STATE_USER, userReducer } from './modules/user/user';
import { UserState } from './modules/user/user.d';
import { Action } from './reducers.d';

export type State = {
  studentsData:StudentState
  userData:UserState
};

export const GLOBAL_INITIAL_STATE:State = {
  studentsData: {
    ...INITIAL_STATE_STUDENT
  },
  userData: {
    ...INITIAL_STATE_USER
  }
};

export default ({ studentsData, userData }:State, action:Action):State => ({
  studentsData: studentsReducer(studentsData, action),
  userData: userReducer(userData, action)
});
