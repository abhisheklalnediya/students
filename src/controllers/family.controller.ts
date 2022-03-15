import { useEffect } from 'react';
import { getStudents } from '../API/students';
import { useStateValue } from '../state';
/**
 * @author Abhishek Lal

 * @summary A react custom hook controller which handles the students list functionality
 */

const useFamily = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { students, fetching } } = state;
  useEffect(() => {
    if (!students.length) {
      getStudents(dispatch);
    }
  }, []);
  return { students, fetching };
};
export default useFamily;
