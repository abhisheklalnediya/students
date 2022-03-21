import { formatDateValue } from '../../../../Utils/common';
import Family, { isFamilyValid, Nationality } from './Family';

export default class Student {
  ID:number;

  firstName: string = '';

  lastName: string = '';

  dateOfBirth: string = '';

  family: Family[] = [];

  nationality: Nationality | null;

  draft:Boolean = false;

  approved:Boolean | null = null;

  constructor(ID:number = 0, {
    firstName = '', lastName = '', dateOfBirth = formatDateValue(), nationality = null, family = [], draft = false
  } = {}) {
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.family = family;
    this.nationality = nationality;
    this.draft = draft;
  }
}

export const isStudentValid = (student:Student) => {
  const messages:string[] = [];
  const fields = [];
  const familyValid = !student.family.find((f) => !isFamilyValid(f));

  if (!student.firstName) {
    messages.push('First Name cannot be Empty');
    fields.push(['firstName', 'First Name cannot be Empty']);
  }
  if (!student.lastName) {
    messages.push('Last Name cannot be Empty');
    fields.push(['lastName', 'Last Name cannot be Empty']);
  }
  if (!student.dateOfBirth) {
    messages.push('Date of birth is empty or not valid');
    fields.push(['dateOfBirth', 'Date of birth is empty or not valid']);
  }
  if (!student.family.length) {
    messages.push('Add atleast one family member');
  }
  if (!familyValid) {
    messages.push('Family members are not valid');
  }

  return {
    valid: !!student.firstName && !!student.lastName && !!student.dateOfBirth && !!student.family.length && familyValid,
    messages,
    fields
  };
};
