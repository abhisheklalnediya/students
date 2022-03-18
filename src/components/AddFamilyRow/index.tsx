import React from 'react';
import useFamily from '../../controllers/family.controller';
import Button from '../Common/Button';
import classes from './addFamilyRow.module.scss';
/**
 * @author Abhishek Lal
 * @summary React Element which renders Button to add a Family Member
 */

function AddFamilyRow() {
  const { addFamily } = useFamily();
  const onClick = () => {
    addFamily();
  };
  return (
    <div className={classes.container}>
      <Button className={classes.addButton} onClick={onClick}>
        <>
          <i className="lni lni-plus" />
          Add Family Member
        </>
      </Button>
    </div>
  );
}

export default React.memo(AddFamilyRow);
