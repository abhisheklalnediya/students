import React from 'react';
import useUser from '../../controllers/user.controller';
import { useStateValue } from '../../state';
import Student from '../../state/modules/students/d/Student';
import { setSelectStudent } from '../../state/modules/students/students.actions';
import { formatDate } from '../../Utils/common';
import Button from '../Common/Button';
import Label from '../Common/Labels';
import classes from './studentRow.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

type StudentRowProp = {
  student: Student
};

function StudentRow(prop:StudentRowProp) {
  const { student } = prop;
  const {
    firstName, lastName, dateOfBirth, ID, approved
  } = student;
  const { dispatch } = useStateValue();
  const onViewClick = () => {
    dispatch(setSelectStudent(ID));
  };
  const { isDisabled } = useUser();
  const approveIcon = ['lni'];
  if (approved === true) {
    approveIcon.push('lni-checkmark-circle');
  } else if (approved === false) {
    approveIcon.push('lni-cross-circle');
  } else {
    approveIcon.push('lni-pencil-alt');
  }
  return (
    <div className={classes.container}>
      <Label label={<i className={approveIcon.join(' ')} />} className={classes.status} />
      <Label label={ID} className={classes.id} />
      <Label label={`${firstName}`} className={classes.name} />
      <Label label={lastName} className={classes.name} />
      <Label label={dateOfBirth ? formatDate(dateOfBirth) : ''} className={classes.dob} />
      <div className={classes.actions}>
        {/* <Button className={classes.buttonDelete} mini error disabled={isDisabled}>Delete</Button> */}
        <Button onClick={onViewClick} mini>{isDisabled ? 'View' : 'View/Edit'}</Button>
      </div>
    </div>
  );
}

export default React.memo(StudentRow);
