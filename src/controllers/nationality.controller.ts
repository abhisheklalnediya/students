import { Option } from '../components/Common/Select';
import { useStateValue } from '../state';

const useNationality = () => {
  const { state } = useStateValue();
  const { studentsData: { nationalities } } = state;
  const nationalityOptions:Option[] = nationalities.map((n) => ({ value: n.ID, label: n.Title }));

  return { nationalities, nationalityOptions };
};

export default useNationality;
