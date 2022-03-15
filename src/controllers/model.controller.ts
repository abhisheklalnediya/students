import { useStateValue } from '../state';
import { setShowModel } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal
 * @summary A react custom hook controller which handles model state
 */

const useModel = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { showModel: show } } = state;
  const showModel = (visiblity:boolean) => {
    dispatch(setShowModel(visiblity));
  };
  return { show, showModel };
};
export default useModel;
