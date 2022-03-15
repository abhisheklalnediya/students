import React from 'react';
import useModel from '../../controllers/model.controller';
import Button from '../Common/Button';
import classes from './student.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

function AddStudentRow() {
  const { showModel, show } = useModel();
  const onClick = () => {
    showModel(!show);
  };
  console.log({ show });
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
