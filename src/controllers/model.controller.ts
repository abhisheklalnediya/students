import { useStateValue } from '../state';
import { setAddStudent, setModelHide } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal
 * @summary A react custom hook controller which handles model state
 */

const useModel = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { selectedStudentID } } = state;
  const showModel = (visiblity:boolean) => {
    dispatch(setAddStudent(visiblity));
  };
  const hideModel = () => {
    dispatch(setModelHide());
  };
  return {
    selectedStudentID, showModel, hideModel
  };
};
export default useModel;
