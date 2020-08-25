import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './SearchBar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color: '#474B4F',
    },
    'MuiFormControl-root': {
      border: 'grey'
    }
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.root}/>
    </form>
  );
}
