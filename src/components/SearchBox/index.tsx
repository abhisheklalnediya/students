import React from 'react';
import useSearch from '../../controllers/search.controller';
import classes from './SearchBox.module.scss';

/**
 * @author Abhishek Lal
 * @summary React Element which renders a basic controlled input for Searching a student.
 */

function SearchBox() {
  const {
    searchQuery, setSearch,
  } = useSearch();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className={classes.input}
      placeholder="Type for searching..."
      value={searchQuery}
      onChange={onChange}
    />
  );
}

export default React.memo(SearchBox);
