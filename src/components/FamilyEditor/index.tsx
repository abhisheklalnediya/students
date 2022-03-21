import React from 'react';
import useNationality from '../../controllers/nationality.controller';
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
};

function FamilyEditor(props:FamilyEditorProps) {
  const { family } = props;
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
  return (
    <div>
      <Label label="Edit Family Member" className={classes.title} />
      <Input required title="First Name" name="firstName" onChange={onInputChange} value={firstName} />
      <Input required title="Last Name" name="lastName" onChange={onInputChange} value={lastName} />
      <Select required title="Relationship" name="relationship" onChange={onInputChange} value={relationship} options={relationOptions} />
      <Select required title="Nationality" name="nationality" onChange={onInputChange} value={nationality && nationality.ID} options={nationalityOptions} />
      <DatePicker title="Date of Birth" onChange={onDateChange} value={dateOfBirth} name="dateOfBirth" />
      {messages.length ? <ErrorBox>{messages.join('; ')}</ErrorBox> : null}
      {/* {messages.join(' ')} */}
    </div>
  );
}

export default FamilyEditor;
