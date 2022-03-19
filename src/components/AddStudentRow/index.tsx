import React from 'react';
import useModal from '../../controllers/modal.controller';
import Button from '../Common/Button';
import classes from './addStudentRow.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders Button to add a Student
 */

function AddStudentRow() {
  const { showModal } = useModal();
  const onClick = () => {
    showModal(true);
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
