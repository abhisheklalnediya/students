import React from 'react';
import useFamily from '../../controllers/family.controller';
import useUser from '../../controllers/user.controller';
import Family, { isFamilyValid } from '../../state/modules/students/d/Family';
import AddFamilyRow from '../AddFamilyRow';
import FamilyEditor from '../FamilyEditor';
import FamilyRow from '../FamilyRow';
import classes from './familyList.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

type FamilyListProps = {
  markError: boolean
};

function FamilyList(props:FamilyListProps) {
  const { markError } = props;
  const {
    family, fetching, setSelectedFamilyID, selectedFamily, selectedStudent
  } = useFamily();
  const { isDisabled } = useUser();
  const addEnabled = (selectedStudent && selectedStudent.draft) || !isDisabled;
  const allowAdd = !family.find((f) => !isFamilyValid(f).valid);

  return (
    <div className={classes.container}>
      <div className={classes.list}>

        <AddFamilyRow disabled={!allowAdd || !addEnabled} />
        {family.map((f:Family) => <FamilyRow error={markError && !isFamilyValid(f).valid} key={f.ID} family={f} onClick={setSelectedFamilyID} />)}
        {!family.length ? 'No Family there!!' : null}
        {fetching ? '...' : null}
      </div>
      {selectedFamily ? (
        <div className={classes.editor}>
          <FamilyEditor family={selectedFamily} markError={markError} />
        </div>
      ) : null }
    </div>
  );
}

export default FamilyList;
