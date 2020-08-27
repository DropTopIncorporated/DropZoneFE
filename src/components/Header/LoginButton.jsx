import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function LoginButton() {

  return (
    <div className={styles.button}>
      <Link to='/login' >
        <Button>Login</Button> 
      </Link>
    </div>
  );
}
