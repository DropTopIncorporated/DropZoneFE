import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup, useActiveUser } from '../../hooks/AuthContext';

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
    <form onSubmit={handleSubmit}>
      <input type ='text' name = 'email' value = {email} placeholder = 'Email' onChange = {({ target }) => setEmail(target.value)}/>
      <input type ='text' name = 'password' value= {password} placeholder = 'PassWord' onChange = {({ target }) => setPassword(target.value)}/>
      <button>SIGNUP</button>
    </form>
  );
}
