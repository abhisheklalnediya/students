import React from 'react';
import Label from '../Common/Labels';
import classes from './studentRow.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a the title row for the student list
 */

function StudentTitleRow() {
  return (
    <div className={classes.titleContainer}>
      <Label label="Status" className={classes.status} />
      <Label label="ID" className={classes.id} />
      <Label label="First Name" className={classes.name} />
      <Label label="Last Name" className={classes.name} />
      <Label label="Date of Birth" className={classes.dob} />
      <div className={classes.actions}>
        <Label label="Actions" className={classes.dob} />

      </div>
    </div>
  );
}

export default React.memo(StudentTitleRow);
