import { useStateValue } from '../state';
import { setAddStudent, setModalHide } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal
 * @summary A react custom hook controller which handles modal state
 */

const useModal = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { selectedStudentID } } = state;
  const showModal = (visiblity:boolean) => {
    dispatch(setAddStudent(visiblity));
  };
  const hideModal = () => {
    dispatch(setModalHide());
  };
  return {
    selectedStudentID, showModal, hideModal
  };
};
export default useModal;
