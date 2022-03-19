import axios from 'axios';
import React from 'react';
import Student from '../state/modules/students/d/Student';
import * as StudentActions from '../state/modules/students/students.actions';
import { Action } from '../state/reducers.d';

const API_BASE_URL = 'http://localhost:8088/api';

export const getStudents = (dispatch:React.Dispatch<Action>) => {
  const url = `${API_BASE_URL}/Students`;
  axios.get(url).then((d) => {
    const students = d.data.map((s:Student) => new Student(s.ID, { firstName: s.firstName, lastName: s.lastName, dateOfBirth: s.dateOfBirth }));
    dispatch(StudentActions.getStudents(students));
  });
};

export const getNationalities = (dispatch:React.Dispatch<Action>) => {
  const url = `${API_BASE_URL}/Nationalities`;
  axios.get(url).then((d) => {
    const nationalities = d.data;
    dispatch(StudentActions.getNationalities(nationalities));
  });
};

export const getFamily = (dispatch:React.Dispatch<Action>, id:number) => {
  const url = `${API_BASE_URL}/Students/${id}/FamilyMembers/`;
  axios.get(url).then((d) => {
    dispatch(StudentActions.getFamily(d.data || [], id));
  });
};

export const postStudent = (dispatch:React.Dispatch<Action>, student:Student) => {
  const url = `${API_BASE_URL}/Students`;
  return axios.post(url, student).then(({ data }) => {
    dispatch(StudentActions.postStudent(new Student(data.ID, data)));
  });
};

export const putStudent = (dispatch:React.Dispatch<Action>, student:Student) => {
  const url = `${API_BASE_URL}/Students/${student.ID}`;
  return axios.put(url, student).then(({ data }) => {
    dispatch(StudentActions.putStudent(new Student(data.ID, data)));
  });
};
