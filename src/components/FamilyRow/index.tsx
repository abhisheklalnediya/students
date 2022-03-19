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
};

function FamilyRow(prop:FamilyRowProp) {
  const { family, onClick: oc } = prop;
  const {
    firstName, lastName, ID, nationality, relationship, draft
  } = family;
  const { Title = '-' } = nationality || {};
  const onClick = () => {
    oc(ID);
  };
  return (
    <div className={classes.container}>
      <Label label={draft ? '' : ID} className={classes.id} />
      <Label label={firstName ? `${firstName} ${lastName}` : '-'} className={classes.name} />
      <Label label={relationship || '-'} className={classes.relationship} />
      <Label label={Title || '-'} className={classes.nationality} />
      <Button mini onClick={onClick}>View</Button>
      <Button error mini onClick={onClick}>Delete</Button>
    </div>
  );
}

export default React.memo(FamilyRow);
