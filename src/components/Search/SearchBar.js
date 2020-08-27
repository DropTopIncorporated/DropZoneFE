import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './SearchBar.css';

// eslint-disable-next-line react/prop-types
export default function SearchBar({ onChange }) {

  return (
    <div>
      <form noValidate autoComplete="off" className={styles.searchBar}>
        <TextField onChange={onChange}className={styles.textField}
          id="outlined-basic" label="Search" variant="outlined" />
      </form>
    </div>
  );
}
