import { Action } from '../../reducers.d';
import { StudentState } from './d';
import Student from './d/Student';
import {
  ACTION_ADD_FAMILY_DRAFT,
  ACTION_ADD_STUDENT_DRAFT, ACTION_GET_FAMILY, ACTION_GET_STUDENTS, ACTION_HIDE_ADD_STUDENT_MODEL, ACTION_POST_STUDENT,
  ACTION_PUT_STUDENT, ACTION_SELECT_STUDENT, ACTION_SET_SEARCH, ACTION_SET_STUDENT_DETAIL
} from './students.constants';

export const INITIAL_STATE_STUDENT:StudentState = {
  students: [],
  fetching: true,
  searchQuery: '',
  selectedStudentID: null,
};

const getStudentIndex = (students:Student[], ID:number) => students.findIndex((s) => s.ID === ID);

export function studentsReducer(state:StudentState, action:Action) {
  // eslint-disable-next-line no-console
  console.log({ action });
  switch (action.type) {
    case ACTION_SET_SEARCH: {
      return {
        ...state,
        searchQuery: action.payload
      };
    }
    case ACTION_GET_STUDENTS: {
      return {
        ...state,
        fetching: false,
        students: action.payload
      };
    }
    case ACTION_SELECT_STUDENT: {
      return {
        ...state,
        selectedStudentID: action.payload
      };
    }
    case ACTION_SET_STUDENT_DETAIL: {
      const { students, selectedStudentID } = state;
      if (selectedStudentID !== null) {
        students[getStudentIndex(students, selectedStudentID)] = action.payload;
      }
      return {
        ...state,
        students
      };
    }
    case ACTION_GET_FAMILY: {
      const { students } = state;
      students[getStudentIndex(students, action.payload.studentID)].family = action.payload.family;
      return {
        ...state,
        students
      };
    }
    case ACTION_PUT_STUDENT: {
      const { students } = state;
      const student = students[getStudentIndex(students, action.payload.ID)];
      student.draft = false;
      return {
        ...state,
        students
      };
    }
    case ACTION_POST_STUDENT: {
      const { students } = state;
      return {
        ...state,
        students: [action.payload, ...students]
      };
    }
    case ACTION_ADD_STUDENT_DRAFT: {
      const { students } = state;
      const newID = 0;
      return {
        ...state,
        selectedStudentID: newID,
        students: [new Student(newID, { draft: true }), ...students]
      };
    }
    case ACTION_HIDE_ADD_STUDENT_MODEL: {
      const { students } = state;
      return {
        ...state,
        selectedStudentID: null,
        students: students.filter((s) => !s.draft)
      };
    }

    case ACTION_ADD_FAMILY_DRAFT: {
      const { students, selectedStudentID } = state;

      if (selectedStudentID !== null) {
        const student = students[getStudentIndex(students, selectedStudentID)];
        const newFamily = { firstName: 'TADA' };
        student.family.push(newFamily);
        students[getStudentIndex(students, selectedStudentID)] = student;
        console.log(student);
      }

      return {
        ...state,
        students
      };
    }
    default:
      break;
  }
  return state;
}
