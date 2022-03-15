import { Action } from '../../reducers.d';
import { Student } from './students';
import { ACTION_GET_STUDENTS, ACTION_SET_SEARCH, ACTION_SHOW_STUDENT_MODEL } from './students.constants';

// eslint-disable-next-line import/prefer-default-export
export const setSearch = (q:string):Action => ({
  type: ACTION_SET_SEARCH,
  payload: q
});

export const getStudents = (students:Student[] | any):Action => ({
  type: ACTION_GET_STUDENTS,
  payload: students
});

export const setShowModel = (show:Boolean):Action => ({
  type: ACTION_SHOW_STUDENT_MODEL,
  payload: show
});
