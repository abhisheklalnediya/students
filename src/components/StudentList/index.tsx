import React from 'react';
import useStudents from '../../controllers/students.controller';
import Student from '../../state/modules/students/d/Student';
import AddStudentRow from '../AddStudentRow';
import StudentRow from '../StudentRow';
import StudentTitleRow from '../StudentRow/StudentTitleRow';
import classes from './studentList.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 */

function StudentList() {
  const { fetching, visibleStudents } = useStudents();
  return (
    <div className={classes.container}>
      <StudentTitleRow />
      {visibleStudents.map((s:Student) => <StudentRow key={s.ID} student={s} />)}
      {!visibleStudents.length && !fetching ? 'No Students there!!' : null}
      <AddStudentRow />
      {fetching ? '...' : null}
    </div>
  );
}

export default StudentList;
