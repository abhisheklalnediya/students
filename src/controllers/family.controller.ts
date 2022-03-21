import { useEffect, useState } from 'react';
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
  const [selectedFamilyID, setSelectedFamilyID] = useState<number | null>(null);

  useEffect(() => {
    if (selectedStudentID !== null && selectedStudent && (!selectedStudent.family.length) && !selectedStudent.draft) {
      getFamily(dispatch, selectedStudentID);
    }
    setSelectedFamilyID(null);
  }, [selectedStudentID, students]);

  const family:Family[] = selectedStudent ? selectedStudent.family : [];
  const selectedFamily = selectedFamilyID ? family.find((f) => f.ID === selectedFamilyID) : null;

  useEffect(() => {
    if (family.length) {
      setSelectedFamilyID(family[family.length - 1].ID);
    } else {
      setSelectedFamilyID(null);
    }
  }, [family.length]);

  useEffect(() => {
    console.log('Family');
  }, [family]);
  const addFamily = () => {
    dispatch(StudentActions.addFamily());
  };

  return {
    family, fetching, addFamily, selectedFamily, setSelectedFamilyID, selectedFamilyID
  };
};
export default useFamily;
