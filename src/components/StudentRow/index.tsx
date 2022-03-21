import React from 'react';
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
    firstName, lastName, dateOfBirth, ID
  } = student;
  const { dispatch } = useStateValue();
  const onViewClick = () => {
    dispatch(setSelectStudent(ID));
  };
  return (
    <div className={classes.container}>
      <Label label={ID} className={classes.id} />
      <Label label={`${firstName}`} className={classes.name} />
      <Label label={lastName} className={classes.name} />
      <Label label={dateOfBirth ? formatDate(dateOfBirth) : ''} className={classes.dob} />
      <div className={classes.actions}>
        <Button className={classes.buttonDelete} mini error>Delete</Button>
        <Button onClick={onViewClick} mini>View/Edit</Button>
      </div>
    </div>
  );
}

export default React.memo(StudentRow);
