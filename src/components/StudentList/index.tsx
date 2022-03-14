import React from 'react';
import { useStateValue } from '../../state';

/**
 * @author Abhishek Lal
 * @summary React Element which renders the list of all the Students.
 * @param {String} value - Value of the search input.
 * @param {Function} onChange - an onChange call back function tiggerd when the value changes.
 */

function StudentList() {
  const state = useStateValue();
  console.log(state);
  return (
    null
  );
}

export default React.memo(StudentList);
