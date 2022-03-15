import React from 'react';
import useStudents from '../../controllers/students.controller';
import AddStudentRow from '../AddStudentRow';
import Student from '../Student';
import classes from './studentList.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

function StudentList() {
  const { students, fetching } = useStudents();
  return (
    <div className={classes.container}>
      <AddStudentRow />
      {students.map((s) => <Student key={s.ID} student={s} />)}
      {!students.length && !fetching ? 'No Students there!!' : null}
      {fetching ? '...' : null}
    </div>
  );
}

export default StudentList;
