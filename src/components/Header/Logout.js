import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Header.css'
export default function LogoutButton() {

  return (
    <div className={styles.button}>
      <Button>Logout</Button>     
    </div>
  );
}