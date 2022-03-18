import { Action } from '../../reducers.d';
import Family from './d/Family';
import Student from './d/Student';
import {
  ACTION_ADD_FAMILY_DRAFT,
  ACTION_ADD_STUDENT_DRAFT, ACTION_GET_FAMILY, ACTION_GET_STUDENTS, ACTION_HIDE_ADD_STUDENT_MODEL,
  ACTION_POST_STUDENT,
  ACTION_PUT_STUDENT,
  ACTION_SELECT_STUDENT, ACTION_SET_SEARCH, ACTION_SET_STUDENT_DETAIL
} from './students.constants';

// eslint-disable-next-line import/prefer-default-export
export const setSearch = (q:string):Action => ({
  type: ACTION_SET_SEARCH,
  payload: q
});

export const getStudents = (students:Student[] | any):Action => ({
  type: ACTION_GET_STUDENTS,
  payload: students
});

export const putStudent = (students:Student | any):Action => ({
  type: ACTION_PUT_STUDENT,
  payload: students
});

export const postStudent = (students:Student | any):Action => ({
  type: ACTION_POST_STUDENT,
  payload: students
});

export const getFamily = (family:Family[] | any, studentID:number):Action => ({
  type: ACTION_GET_FAMILY,
  payload: { family, studentID }
});

export const addFamily = (family?:Family):Action => ({
  type: ACTION_ADD_FAMILY_DRAFT,
  payload: family || undefined
});

export const setAddStudent = (show:Boolean):Action => ({
  type: ACTION_ADD_STUDENT_DRAFT,
  payload: show
});

export const setSelectStudent = (id:number):Action => ({
  type: ACTION_SELECT_STUDENT,
  payload: id
});

export const setModelHide = ():Action => ({
  type: ACTION_HIDE_ADD_STUDENT_MODEL,
});

export const setStudentDetails = (student:Student):Action => ({
  type: ACTION_SET_STUDENT_DETAIL,
  payload: student
});
