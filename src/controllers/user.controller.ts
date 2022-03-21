import { useStateValue } from '../state';

const useUser = () => {
  const { state, } = useStateValue();
  const { userData: { user: { type } } } = state;
  return { userType: type };
};

export default useUser;
