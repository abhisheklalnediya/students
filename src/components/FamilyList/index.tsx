import React from 'react';
import useFamily from '../../controllers/family.controller';
import AddFamilyRow from '../AddFamilyRow';
import FamilyRow from '../FamilyRow';
import classes from './familyList.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

function FamilyList() {
  const { family, fetching } = useFamily();
  return (
    <div className={classes.container}>
      <AddFamilyRow />
      {family.map((f) => <FamilyRow key={f.ID} family={f} />)}
      {!family.length ? 'No Family there!!' : null}
      {fetching ? '...' : null}
    </div>
  );
}

export default FamilyList;
