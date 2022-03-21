import React from 'react';
import useAddStudent from '../../controllers/addStudent.controller';
import Button from '../Common/Button';
import classes from './addStudentRow.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders Button to add a Student
 */

function AddStudentRow() {
  const { addStudentDraft } = useAddStudent();
  const onClick = () => {
    addStudentDraft();
  };
  return (
    <div className={classes.container}>
      <Button className={classes.addButton} onClick={onClick}>
        <>
          <i className="lni lni-plus" />
          Add Student
        </>
      </Button>
    </div>
  );
}

export default React.memo(AddStudentRow);
