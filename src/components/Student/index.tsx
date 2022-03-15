import React from 'react';
import { Student as StudentD } from '../../state/modules/students/students';
import Label from '../Common/Labels';
import classes from './student.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

type StudentProp = {
  student: StudentD
};

function Student(prop:StudentProp) {
  const { student } = prop;
  const {
    firstName, lastName, dateOfBirth, ID
  } = student;
  return (
    <div className={classes.container}>
      <Label label={ID} className={classes.id} />
      <Label label={`${firstName}`} className={classes.name} />
      <Label label={lastName} className={classes.name} />
      <Label label={dateOfBirth} className={classes.dob} />
    </div>
  );
}

export default React.memo(Student);
