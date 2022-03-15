import axios from 'axios';
import React from 'react';
import { getStudents as gs } from '../state/modules/students/students.actions';
import { Action } from '../state/reducers.d';

const API_BASE_URL = 'http://localhost:8088/api';

export const getStudents = (dispatch:React.Dispatch<Action>) => {
  const url = `${API_BASE_URL}/Students`;
  axios.get(url).then((d) => {
    dispatch(gs(d.data));
  });
};

export const postStudent = () => {
  const url = `${API_BASE_URL}/Students`;
  return axios.get(url);
};

export const putStudent = (id:string) => {
  const url = `${API_BASE_URL}/Students/${id}`;
  return axios.get(url);
};
