export default class Student {
  ID:number;

  firstName: string = '';

  lastName: string = '';

  dateOfBirth: string = '';

  family: any[] = [];

  draft:Boolean = false;

  constructor(ID:number = 0, {
    firstName = '', lastName = '', dateOfBirth = '', family = [], draft = false
  } = {}) {
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.family = family;
    this.draft = draft;
  }
}
