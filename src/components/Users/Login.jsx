import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useLogin, useActiveUser } from '../../hooks/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = useLogin();

  const activeUser = useActiveUser();

  if(activeUser) return <Redirect to="/"/>;

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then(() => history.push('/'));
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input type ='text' name = 'email' value = {email} placeholder = 'Email' onChange = {({ target }) => setEmail(target.value)}/>
      <input type ='text' name = 'password' value= {password} placeholder = 'PassWord' onChange = {({ target }) => setPassword(target.value)}/>
      <Button>LOGIN</Button>
    </form>
  );
}
