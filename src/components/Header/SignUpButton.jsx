import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function SignUpButton() {

  return (
    <div className={styles.button}>
      <Link to='/signup' >
        <Button>SignUp</Button>
      </Link>
           
    </div>
  );
}
