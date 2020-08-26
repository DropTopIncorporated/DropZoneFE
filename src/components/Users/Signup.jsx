import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup, useActiveUser } from '../../hooks/AuthContext';
import styles from './Login.css'
import logo from '../../photos/Logo.png'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();
  const history = useHistory();

  const activeUser = useActiveUser();

  activeUser && history.push('/');

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, password)
      .then(() => history.push('/'));
  };

  return (
  <div className={styles.formContainer}>
    <div className={styles.formBox}>
    <img src={logo} className={styles.logo}/>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type ='text' name = 'email' value = {email} placeholder = 'Email' onChange = {({ target }) => setEmail(target.value)}/>
      <input type ='password' name = 'password' value= {password} placeholder = 'Password' onChange = {({ target }) => setPassword(target.value)}/>
      <button>Sign Up</button>
    </form>
    </div>
  </div>
  );
}
