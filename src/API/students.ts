import axios from 'axios';
import React from 'react';
import { Action } from '../state/d/reducers';
import Family, { Nationality } from '../state/modules/students/d/Family';
import Student from '../state/modules/students/d/Student';
import * as StudentActions from '../state/modules/students/students.actions';

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
    return data;
  });
};

export const putStudent = (dispatch:React.Dispatch<Action>, student:Student) => {
  const url = `${API_BASE_URL}/Students/${student.ID}`;
  return axios.put(url, student).then(({ data }) => {
    dispatch(StudentActions.putStudent(new Student(data.ID, data)));
    return data;
  });
};

export const postFamily = (dispatch:React.Dispatch<Action>, student:Student, family:Family) => {
  const url = `${API_BASE_URL}/Students/${student.ID}/FamilyMembers`;
  return axios.post(url, family).then(({ data }) => {
    dispatch(StudentActions.postFamily(new Family(data.ID, data)));
    return data;
  });
};

export const putFamily = (dispatch:React.Dispatch<Action>, family:Family) => {
  const url = `${API_BASE_URL}/FamilyMembers/${family.ID}/`;
  return axios.put(url, family).then(({ data }) => {
    dispatch(StudentActions.putFamily(new Family(data.ID, data)));
    return data;
  });
};

export const getStudentNationality = (dispatch:React.Dispatch<Action>, id:number) => {
  const url = `${API_BASE_URL}/Students/${id}/Nationality/`;
  axios.get(url).then((d) => {
    dispatch(StudentActions.getStudentNationality(d.data.nationality || [], id));
  });
};

export const getFamilyNationality = (dispatch:React.Dispatch<Action>, id:number) => {
  const url = `${API_BASE_URL}/FamilyMembers/${id}/Nationality/`;
  axios.get(url).then((d) => {
    dispatch(StudentActions.getFamilyNationality(d.data.nationality || [], id));
  });
};

export const putStudentNationality = (dispatch:React.Dispatch<Action>, student:Student, nationality:Nationality) => {
  const url = `${API_BASE_URL}/Students/${student.ID}/Nationality/${nationality.ID}`;
  return axios.put(url).then((d) => {
    dispatch(StudentActions.getStudentNationality(d.data.nationality || [], student.ID));
  });
};

export const putFamilyNationality = (dispatch:React.Dispatch<Action>, family:Family, nationality:Nationality) => {
  const url = `${API_BASE_URL}/FamilyMembers/${family.ID}/Nationality/${nationality.ID}`;
  return axios.put(url).then((d) => {
    dispatch(StudentActions.putFamilyNationality(d.data.nationality || [], family.ID));
  });
};
