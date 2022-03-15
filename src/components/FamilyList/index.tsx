import React from 'react';
import useFamily from '../../controllers/family.controller';
import AddStudentRow from '../AddStudentRow';
import Student from '../Student';
import classes from './familyList.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

function FamilyList() {
  const { students, fetching } = useFamily();
  return (
    <div className={classes.container}>
      <AddStudentRow />
      {students.map((s) => <Student key={s.ID} student={s} />)}
      {!students.length && !fetching ? 'No Students there!!' : null}
      {fetching ? '...' : null}
    </div>
  );
}

export default FamilyList;
