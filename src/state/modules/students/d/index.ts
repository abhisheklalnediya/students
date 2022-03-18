import Student from './Student';

export interface StudentState {
  students: Student[]
  fetching: boolean
  searchQuery: string
  selectedStudentID: number | null
}
