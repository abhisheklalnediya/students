import React from 'react';
import useFamily from '../../controllers/family.controller';
import Button from '../Common/Button';
import classes from './addFamilyRow.module.scss';

type AddFamilyRowProps = {
  disabled:boolean
};

/**
 * @author Abhishek Lal
 * @summary React Element which renders Button to add a Family Member
 */
function AddFamilyRow(props:AddFamilyRowProps) {
  const { disabled } = props;
  const { addFamily } = useFamily();
  const onClick = () => {
    addFamily();
  };
  return (
    <div className={classes.container}>
      <Button className={classes.addButton} onClick={onClick} disabled={disabled} title="Please complete the last family to add more">
        <>
          <i className="lni lni-plus" />
          Add Family Member
        </>
      </Button>
    </div>
  );
}

export default React.memo(AddFamilyRow);
