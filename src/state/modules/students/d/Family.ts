import { formatDateValue, getRandomId } from '../../../../Utils/common';

export interface Nationality {
  ID: number,
  Title: string
}

export const relationOptions = [
  { value: 'Parent', label: 'Parent' },
  { value: 'Sibling', label: 'Sibling' },
  { value: 'Uncle', label: 'Uncle' },
  { value: 'Aunt', label: 'Aunt' },
];

export default class Family {
  ID:number;

  firstName: string;

  lastName: string;

  dateOfBirth: string;

  nationality: Nationality | null;

  relationship: string;

  draft: boolean = false;

  constructor(ID = getRandomId(), {
    firstName = '', lastName = '', dateOfBirth = formatDateValue(), nationality = null, relationship = relationOptions[0].value, draft = false
  } = {}) {
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
    this.relationship = relationship;
    this.draft = draft;
  }
}

export const isFamilyValid = (family:Family) => {
  const messages:string[] = [];

  if (!family.firstName) {
    messages.push('First Name cannot be Empty');
  }
  if (!family.lastName) {
    messages.push('Last Name cannot be Empty');
  }
  if (!family.dateOfBirth) {
    messages.push('Date of birth is empty or not valid');
  }
  if (!family.nationality) {
    messages.push('Nationality is empty or not valid');
  }
  if (!family.relationship) {
    messages.push('Relationship is empty or not valid');
  }

  return {
    valid: !!family.firstName && !!family.lastName && !!family.dateOfBirth && !!family.nationality && !!family.relationship,
    messages
  };
};
