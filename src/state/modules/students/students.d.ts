export type Student = {
  ID:number
  firstName: string
  lastName: string
  dateOfBirth: string
};

export type StudentState = {
  students: Student[]
  fetching: boolean
  searchQuery: string
  showModel:boolean
};
