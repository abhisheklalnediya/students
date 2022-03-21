import { Action } from '../../reducers.d';
import Family, { Nationality } from './d/Family';
import Student from './d/Student';
import {
  ACTION_ADD_FAMILY_DRAFT,
  ACTION_ADD_STUDENT_DRAFT, ACTION_GET_FAMILY, ACTION_GET_FAMILY_NATIONALITY, ACTION_GET_NATIONALITIES,
  ACTION_GET_STUDENTS, ACTION_GET_STUDENT_NATIONALITY, ACTION_HIDE_ADD_STUDENT_MODAL,
  ACTION_POST_FAMILY, ACTION_POST_STUDENT, ACTION_PUT_FAMILY, ACTION_PUT_FAMILY_NATIONALITY, ACTION_PUT_STUDENT,
  ACTION_PUT_STUDENT_NATIONALITY,
  ACTION_SELECT_STUDENT, ACTION_SET_FAMILY_DETAIL, ACTION_SET_SEARCH, ACTION_SET_STUDENT_DETAIL
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

export const getNationalities = (nationalities:Student[] | any):Action => ({
  type: ACTION_GET_NATIONALITIES,
  payload: nationalities
});

export const putStudent = (student:Student | any):Action => ({
  type: ACTION_PUT_STUDENT,
  payload: student
});

export const postStudent = (student:Student | any):Action => ({
  type: ACTION_POST_STUDENT,
  payload: student
});

export const getFamily = (family:Family[] | any, studentID:number):Action => ({
  type: ACTION_GET_FAMILY,
  payload: { family, studentID }
});

export const getStudentNationality = (nationality:Nationality | any, studentID:number):Action => ({
  type: ACTION_GET_STUDENT_NATIONALITY,
  payload: { nationality, studentID }
});

export const getFamilyNationality = (nationality:Nationality | any, familyID:number):Action => ({
  type: ACTION_GET_FAMILY_NATIONALITY,
  payload: { nationality, familyID }
});

export const putStudentNationality = (nationality:Nationality | any, studentID:number):Action => ({
  type: ACTION_PUT_STUDENT_NATIONALITY,
  payload: { nationality, studentID }
});

export const putFamilyNationality = (nationality:Nationality | any, familyID:number):Action => ({
  type: ACTION_PUT_FAMILY_NATIONALITY,
  payload: { nationality, familyID }
});

export const addFamily = (family?:Family):Action => ({
  type: ACTION_ADD_FAMILY_DRAFT,
  payload: family || undefined
});

export const postFamily = (family:Family | any):Action => ({
  type: ACTION_POST_FAMILY,
  payload: family
});

export const putFamily = (student:Student | any):Action => ({
  type: ACTION_PUT_FAMILY,
  payload: student
});

export const setAddStudent = ():Action => ({
  type: ACTION_ADD_STUDENT_DRAFT,
});

export const setSelectStudent = (id:number):Action => ({
  type: ACTION_SELECT_STUDENT,
  payload: id
});

export const setModalHide = ():Action => ({
  type: ACTION_HIDE_ADD_STUDENT_MODAL,
});

export const setStudentDetails = (student:Student):Action => ({
  type: ACTION_SET_STUDENT_DETAIL,
  payload: student
});

export const setFamilyDetails = (family:Family):Action => ({
  type: ACTION_SET_FAMILY_DETAIL,
  payload: family
});
