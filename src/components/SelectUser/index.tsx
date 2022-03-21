import React from 'react';
import useUser from '../../controllers/user.controller';
import { useStateValue } from '../../state';
import { userTypes } from '../../state/modules/user/user';
import { setUserType } from '../../state/modules/user/user.actions';
import Select, { Option } from '../Common/Select';
import classes from './selectUser.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a dropdown to select user type
 */
function SelectUser() {
  const userOptions:Option[] = userTypes.map((u) => ({ value: u, label: u }));
  const { dispatch } = useStateValue();
  const { userType } = useUser();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setUserType(value));
  };
  return (
    <div className={classes.container}>
      <Select onChange={onChange} options={userOptions} required name="usertype" value={userType} />
    </div>
  );
}

export default React.memo(SelectUser);
