import React from 'react';
import Family from '../../state/modules/students/d/Family';
import Button from '../Common/Button';
import Label from '../Common/Labels';
import classes from './familyRow.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

type FamilyRowProp = {
  family: Family
  onClick: Function
  error: boolean
};

function FamilyRow(prop:FamilyRowProp) {
  const { family, onClick: oc, error } = prop;
  const {
    firstName, lastName, ID, nationality, relationship,
  } = family;
  const { Title = '-' } = nationality || {};

  const onClick = () => {
    oc(ID);
  };
  const containerClasses = [classes.container];
  if (error) {
    containerClasses.push(classes.error);
  }
  return (
    <div className={containerClasses.join(' ')}>
      <Label label={firstName ? `${firstName} ${lastName}` : '-'} className={classes.name} />
      <Label label={relationship || '-'} className={classes.relationship} />
      <Label label={Title || '-'} className={classes.nationality} />
      <Button mini onClick={onClick}>View</Button>
      {/* <Button error mini onClick={onClick}>Delete</Button> */}
    </div>
  );
}

export default React.memo(FamilyRow);
