import { Nationality } from './Family';
import Student from './Student';

export interface StudentState {
  students: Student[]
  fetching: null | boolean
  searchQuery: string
  selectedStudentID: number | null
  nationalities : Nationality[]
}
