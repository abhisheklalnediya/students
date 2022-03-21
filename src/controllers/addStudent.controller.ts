import {
  postFamily, postStudent, putFamily, putFamilyNationality, putStudent, putStudentNationality
} from '../API/students';
import { useStateValue } from '../state';
import Family from '../state/modules/students/d/Family';
import Student from '../state/modules/students/d/Student';
import { setAddStudent } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal
 * @summary A react custom hook controller which handles modal state
 */

const useAddStudent = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { selectedStudentID } } = state;
  const addStudentDraft = () => {
    dispatch(setAddStudent());
  };
  const updateStudent = (student:Student) => new Promise((resolveStudent) => {
    // 1.Save Student
    // 1.1 Save Student Nationality
    // 2.Save Family
    // 2.1 Save Family Nationality

    let studentReq;
    if (student.draft) {
      studentReq = postStudent(dispatch, student);
    } else {
      studentReq = putStudent(dispatch, student);
    }

    studentReq.then((s) => {
      Promise.all(student.family.map((family) => new Promise((resolveFamily) => {
        let familyReq;
        if (family.draft) {
          familyReq = postFamily(dispatch, s, family);
        } else {
          familyReq = putFamily(dispatch, family);
        }
        familyReq.then((f:Family) => {
          if (family.nationality) {
            putFamilyNationality(dispatch, f, family.nationality).then(() => {
              resolveFamily(null);
            });
          } else {
            resolveFamily(null);
          }
        });
      }))).then(() => {
        if (student.nationality) {
          putStudentNationality(dispatch, s, student.nationality).then(() => {
            resolveStudent(null);
          });
        } else {
          resolveStudent(null);
        }
      });
    });
  });
  return {
    selectedStudentID, addStudentDraft, updateStudent
  };
};
export default useAddStudent;
