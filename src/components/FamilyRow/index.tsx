import React from 'react';
import Family from '../../state/modules/students/d/Family';
import Label from '../Common/Labels';
import classes from './familyRow.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

type FamilyRowProp = {
  family: Family
};

function FamilyRow(prop:FamilyRowProp) {
  const { family } = prop;
  const {
    firstName, lastName, dateOfBirth, ID, nationality, relationship
  } = family;
  const { Title = 'NA' } = nationality || {};

  console.log(family);
  return (
    <div className={classes.container}>
      <Label label={ID} className={classes.id} />
      <Label label={`${firstName}`} className={classes.name} />
      <Label label={lastName} className={classes.name} />
      <Label label={relationship} className={classes.relationship} />
      <Label label={Title} className={classes.nationality} />
      <Label label={dateOfBirth} className={classes.dob} />
    </div>
  );
}

export default React.memo(FamilyRow);
