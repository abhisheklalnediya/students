import React, { useCallback, useState } from 'react';
import useAddStudent from '../../controllers/addStudent.controller';
import useModal from '../../controllers/modal.controller';
import useNationality from '../../controllers/nationality.controller';
import useStudent from '../../controllers/student.controller';
import useUser from '../../controllers/user.controller';
import { useStateValue } from '../../state';
import { Nationality } from '../../state/modules/students/d/Family';
import { isStudentValid } from '../../state/modules/students/d/Student';
import { setStudentDetails } from '../../state/modules/students/students.actions';
import Block from '../Common/Block';
import Button from '../Common/Button';
import DatePicker from '../Common/DatePicker';
import ErrorBox from '../Common/ErrorBox';
import Input from '../Common/Input';
import Modal from '../Common/Modal';
import Select from '../Common/Select';
import FamilyList from '../FamilyList';
import classes from './studentModal.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a single student
 */

function StudentModal() {
  const { selectedStudentID, updateStudent } = useAddStudent();
  const { hideModal, } = useModal();
  const { student } = useStudent();
  const { dispatch } = useStateValue();
  const { nationalityOptions, nationalities } = useNationality();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const {
    firstName, lastName, dateOfBirth, nationality
  } = student;

  const onClose = () => {
    hideModal();
  };

  // useEffect(() => {
  //   setErrorMessages([]);
  // }, [student]);

  const onSubmit = useCallback((e:React.SyntheticEvent) => {
    e.preventDefault();
    const { valid, messages } = isStudentValid(student);
    if (valid) {
      updateStudent(student).then(() => {
        hideModal();
      });
    } else {
      setErrorMessages(messages);
    }
  }, [student]);

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const { value } = e.target;
    let fValue:string | Nationality | undefined = value;
    if (key === 'nationality') {
      fValue = nationalities.find((n) => n.ID === parseInt(value, 10));
    }
    const studentNew = {
      ...student,
      [key]: fValue
    };

    dispatch(setStudentDetails(studentNew));
  };

  const onDateChange = (d:any) => {
    if (d && d.target.value) {
      const studentNew = {
        ...student,
        dateOfBirth: d.target.value
      };
      dispatch(setStudentDetails(studentNew));
    }
  };
  const open = selectedStudentID !== null;
  const title = student.draft ? 'Add Student' : 'Edit Student';
  const { isDisabled } = useUser(!!student.draft);
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className={classes.form}>
        <form id="myform" onSubmit={onSubmit}>
          <div className={classes.container}>
            <Input title="First Name" name="firstName" onChange={onInputChange} value={firstName} disabled={isDisabled} />
            <Input title="Last Name" name="lastName" onChange={onInputChange} value={lastName} disabled={isDisabled} />
            <Select required title="Nationality" name="nationality" onChange={onInputChange} value={nationality && nationality.ID} options={nationalityOptions} disabled={isDisabled} />
            <DatePicker title="Date of Birth" onChange={onDateChange} value={dateOfBirth} name="dateOfBirth" disabled={isDisabled} />
          </div>
        </form>
        <Block title="Family Members">
          <FamilyList markError={!!errorMessages.length} />
        </Block>
        <div className={classes.actions}>
          {errorMessages.length ? <ErrorBox>{errorMessages.join('; ')}</ErrorBox> : null}
          <Button submit className={classes.button} form="myform">Save</Button>
          {/* <Button reset className={classes.button}>Reset</Button> */}
        </div>
      </div>

    </Modal>
  );
}

export default React.memo(StudentModal);
