import { useStateValue } from '../state';
import { setModalHide } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal
 * @summary A react custom hook controller which handles modal state
 */

const useModal = () => {
  const { dispatch } = useStateValue();

  const hideModal = () => {
    dispatch(setModalHide());
  };
  return {
    hideModal
  };
};
export default useModal;
