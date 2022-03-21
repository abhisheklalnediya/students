import { useStateValue } from '../state';
import { userTypes } from '../state/modules/user/user';

const useUser = (draft = false) => {
  const { state, } = useStateValue();
  const { userData: { user: { type } } } = state;
  const isDisabled = !draft && type === userTypes[0];
  return { userType: type, isDisabled };
};

export default useUser;
