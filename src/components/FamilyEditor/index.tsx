import React from 'react';
import { useStateValue } from '../../state';
import Family from '../../state/modules/students/d/Family';
import { setFamilyDetails } from '../../state/modules/students/students.actions';
import Input from '../Common/Input';

type FamilyEditorProps = {
  family: Family
};
function FamilyEditor(props:FamilyEditorProps) {
  const { family } = props;
  const { firstName, lastName, dateOfBirth } = family;
  const { dispatch } = useStateValue();
  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const familyUpdate = {
      ...family,
      [e.target.name]: e.target.value
    };

    dispatch(setFamilyDetails(familyUpdate));
  };
  return (
    <div>
      FamilyEditor
      <Input required title="First Name" name="firstName" onChange={onInputChange} value={firstName} />
      <Input required title="Last Name" name="lastName" onChange={onInputChange} value={lastName} />
      <Input required title="Date of Birth" name="dateOfBirth" onChange={onInputChange} value={dateOfBirth} type="date" />

    </div>
  );
}

export default FamilyEditor;
