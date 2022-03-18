import { getRandomId } from '../../../../Utils/common';

export interface Nationality {
  ID: number,
  Title: string
}

export default class Family {
  ID:number;

  firstName: string;

  lastName: string;

  dateOfBirth: string;

  nationality: Nationality | null;

  relationship: string;

  constructor(ID = getRandomId(), {
    firstName = '', lastName = '', dateOfBirth = '', nationality = null, relationship = ''
  } = {}) {
    console.log('New Family Yey');
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
    this.relationship = relationship;
  }
}