import React from 'react';
import useModel from '../../controllers/model.controller';
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
  const { show, showModel } = useModel();
  const onClose = () => {
    console.log('ON CLOSE');
    showModel(false);
  };

  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      fname: { value: string };
      lname: { value: string };
      dob: { value: string };
    };
    const fname = target.fname.value;
    const lname = target.lname.value;
    const dob = target.dob.value;

    console.log({ fname, lname, dob });
  };

  return (
    <Modal open={show} onClose={onClose} title=" TADATADATADA">
      <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.container}>
          <div><Input required title="First Name" name="fname" onChange={() => {}} /></div>
          <div><Input required title="Last Name" name="lname" onChange={() => {}} /></div>
          <div><Input required title="Date of Birth" name="dob" onChange={() => {}} type="date" /></div>
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
