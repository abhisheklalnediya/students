import { useEffect } from 'react';
import { getStudents } from '../API/students';
import { useStateValue } from '../state';
/**
 * @author Abhishek Lal

 * @summary A react custom hook controller which handles the students list functionality
 */

const useStudents = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { students, fetching, searchQuery } } = state;
  useEffect(() => {
    if (!students.length) {
      getStudents(dispatch);
    }
  }, []);
  let visibleStudents = students;// .filter((s) => !s.draft);
  if (searchQuery) {
    visibleStudents = visibleStudents.filter((s) => s.ID === parseInt(searchQuery, 10) || [s.firstName, s.lastName].join(' ').toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
  }

  return {
    students, fetching, searchQuery, visibleStudents
  };
};
export default useStudents;
