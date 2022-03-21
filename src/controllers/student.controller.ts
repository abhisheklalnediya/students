import { useEffect } from 'react';
import { getStudentNationality } from '../API/students';
import { useStateValue } from '../state';
import Student from '../state/modules/students/d/Student';

/**
 * @author Abhishek Lal

 * @summary A react custom hook controller which handles the students list functionality
 */

const useStudent = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { students, selectedStudentID } } = state;

  const student = students.find((s:Student) => s.ID === selectedStudentID) || new Student(0);

  useEffect(() => {
    if (selectedStudentID !== null && student && (!student.nationality) && !student.draft) {
      getStudentNationality(dispatch, selectedStudentID);
    }
  }, [selectedStudentID, students]);

  return { student };
};
export default useStudent;
