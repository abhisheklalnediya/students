import React from 'react';
import { postStudent, putStudent } from '../../API/students';
import useModel from '../../controllers/model.controller';
import useStudent from '../../controllers/student.controller';
import { useStateValue } from '../../state';
import { setStudentDetails } from '../../state/modules/students/students.actions';
import Block from '../Common/Block';
import Button from '../Common/Button';
import Input from '../Common/Input';
import Modal from '../Common/Modal';
import FamilyList from '../FamilyList';
import classes from './studentModel.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

function StudentModel() {
  const { selectedStudentID, hideModel } = useModel();
  const { student } = useStudent();
  const { dispatch } = useStateValue();
  const { firstName, lastName, dateOfBirth } = student;
  const onClose = () => {
    hideModel();
  };

  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    let ps;
    if (student.draft) {
      ps = postStudent(dispatch, student);
    } else {
      ps = putStudent(dispatch, student);
    }
    ps.then(() => {
      hideModel();
    });
  };

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const studentNew = {
      ...student,
      [e.target.name]: e.target.value
    };

    dispatch(setStudentDetails(studentNew));
  };
  const open = selectedStudentID !== null;
  const title = student.draft ? 'Add Student' : 'Edit Student';
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.container}>
          <div><Input required title="First Name" name="firstName" onChange={onInputChange} value={firstName} /></div>
          <div><Input required title="Last Name" name="lastName" onChange={onInputChange} value={lastName} /></div>
          <div><Input required title="Date of Birth" name="dateOfBirth" onChange={onInputChange} value={dateOfBirth} type="date" /></div>
          <Block title="Family Members">
            <FamilyList />
          </Block>
        </div>
        <div className={classes.actions}>
          <Button submit className={classes.button}>Save</Button>
          {/* <Button reset className={classes.button}>Reset</Button> */}
        </div>

      </form>
    </Modal>
  );
}

export default React.memo(StudentModel);
