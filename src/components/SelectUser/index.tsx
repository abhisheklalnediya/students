import React from 'react';
import { userTypes } from '../../state/modules/user/user';
import Select, { Option } from '../Common/Select';
import classes from './selectUser.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a dropdown to select user type
 */
function SelectUser() {
  const userOptions:Option[] = userTypes.map((u) => ({ value: u, label: u }));

  const onChange = () => {

  };
  return (
    <div className={classes.container}>
      <Select onChange={onChange} options={userOptions} required name="usertype" value={userTypes[0]} />
    </div>
  );
}

export default React.memo(SelectUser);
