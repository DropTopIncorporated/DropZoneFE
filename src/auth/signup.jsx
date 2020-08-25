import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup, useActiveUser } from '../hooks/AuthContext';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();
  const history = useHistory();

  const activeUser = useActiveUser();

  activeUser && history.push('/');

  const handleSubmit = event => {
    event.preventDefault();
    signup(username, password)
      .then(() => history.push('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type ='text' name = 'username' value = {username} placeholder = 'UserName' onChange = {({ target }) => setUsername(target.value)}/>
      <input type ='text' name = 'password' value= {password} placeholder = 'PassWord' onChange = {({ target }) => setPassword(target.value)}/>
      <button>SIGNUP</button>
    </form>
  );
}
