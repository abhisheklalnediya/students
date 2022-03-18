import { useEffect } from 'react';
import { getFamily } from '../API/students';
import { useStateValue } from '../state';
import Family from '../state/modules/students/d/Family';
import * as StudentActions from '../state/modules/students/students.actions';

/**
 * @author Abhishek Lal

 * @summary A react custom hook controller which handles the students list functionality
 */

const useFamily = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { students, fetching, selectedStudentID } } = state;
  const selectedStudent = students.find(({ ID }) => ID === selectedStudentID);

  useEffect(() => {
    if (selectedStudentID !== null && selectedStudent && (!selectedStudent.family.length) && !selectedStudent.draft) {
      getFamily(dispatch, selectedStudentID);
    }
  }, [selectedStudentID, students]);
  const family:Family[] = selectedStudent ? selectedStudent.family : [];
  console.log(family);

  const addFamily = () => {
    dispatch(StudentActions.addFamily());
  };

  return { family, fetching, addFamily };
};
export default useFamily;
