import { useStateValue } from '../state';
import { setSearch as ss } from '../state/modules/students/students.actions';
/**
 * @author Abhishek Lal

 * @summary A react custom hook controller which handles the watchlist functionality
 */

const useSearch = () => {
  const { state, dispatch } = useStateValue();
  const { studentsData: { searchQuery } } = state;
  const setSearch = (e:string) => {
    dispatch(ss(e));
  };

  return { searchQuery, setSearch };
};
export default useSearch;
