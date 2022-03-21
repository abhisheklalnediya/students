import { useStateValue } from '../state';
import { userTypes } from '../state/modules/user/user';

const useUser = (draft = false) => {
  const { state, } = useStateValue();
  const { userData: { user: { type } } } = state;
  const isDisabled = !draft && type === userTypes[0];
  const isRegistar = type === userTypes[1];
  return { userType: type, isDisabled, isRegistar };
};

export default useUser;
