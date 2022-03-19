import React from 'react';
import useFamily from '../../controllers/family.controller';
import Family from '../../state/modules/students/d/Family';
import AddFamilyRow from '../AddFamilyRow';
import FamilyEditor from '../FamilyEditor';
import FamilyRow from '../FamilyRow';
import classes from './familyList.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

function FamilyList() {
  const {
    family, fetching, setSelectedFamilyID, selectedFamily,
  } = useFamily();

  return (
    <div className={classes.container}>
      <div className={classes.list}>

        <AddFamilyRow />
        {family.map((f:Family) => <FamilyRow key={f.ID} family={f} onClick={setSelectedFamilyID} />)}
        {!family.length ? 'No Family there!!' : null}
        {fetching ? '...' : null}
      </div>
      {selectedFamily ? (
        <div className={classes.editor}>
          <FamilyEditor family={selectedFamily} />
        </div>
      ) : null }
    </div>
  );
}

export default FamilyList;
