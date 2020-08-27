import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//       color: '#474B4F',
//     },
//     'MuiFormControl-root': {
//     }
//   }
// }));

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

// className={styles.textField}
