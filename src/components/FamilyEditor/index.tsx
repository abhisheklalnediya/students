import React from 'react';
import useNationality from '../../controllers/nationality.controller';
import useUser from '../../controllers/user.controller';
import { useStateValue } from '../../state';
import Family, { isFamilyValid, Nationality, relationOptions } from '../../state/modules/students/d/Family';
import { setFamilyDetails } from '../../state/modules/students/students.actions';
import DatePicker from '../Common/DatePicker';
import ErrorBox from '../Common/ErrorBox';
import Input from '../Common/Input';
import Label from '../Common/Labels';
import Select from '../Common/Select';
import classes from './familyEditor.module.scss';

type FamilyEditorProps = {
  family: Family
  markError: boolean

};

function FamilyEditor(props:FamilyEditorProps) {
  const { family, markError } = props;
  const {
    firstName, lastName, dateOfBirth, relationship, nationality
  } = family;

  const { nationalities, nationalityOptions } = useNationality();
  const { dispatch } = useStateValue();
  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const { value } = e.target;
    let fValue:string | Nationality | undefined = value;
    if (key === 'nationality') {
      fValue = nationalities.find((n) => n.ID === parseInt(value, 10));
    }
    const familyUpdate = {
      ...family,
      [key]: fValue
    };
    dispatch(setFamilyDetails(familyUpdate));
  };

  const onDateChange = (d:any) => {
    if (d && d.target.value) {
      const familyUpdate = {
        ...family,
        dateOfBirth: d.target.value
      };
      dispatch(setFamilyDetails(familyUpdate));
    }
  };
  const { messages } = isFamilyValid(family);
  const { isDisabled } = useUser(family.draft);
  return (
    <div>
      <Label label="Edit Family Member" className={classes.title} />
      <Input required title="First Name" name="firstName" onChange={onInputChange} value={firstName} disabled={isDisabled} />
      <Input required title="Last Name" name="lastName" onChange={onInputChange} value={lastName} disabled={isDisabled} />
      <Select required title="Relationship" name="relationship" onChange={onInputChange} value={relationship} options={relationOptions} disabled={isDisabled} />
      <Select required title="Nationality" name="nationality" onChange={onInputChange} value={nationality && nationality.ID} options={nationalityOptions} disabled={isDisabled} />
      <DatePicker title="Date of Birth" onChange={onDateChange} value={dateOfBirth} name="dateOfBirth" disabled={isDisabled} />
      {messages.length && markError ? <ErrorBox>{messages.join('; ')}</ErrorBox> : null}
      {/* {messages.join(' ')} */}
    </div>
  );
}

export default FamilyEditor;
