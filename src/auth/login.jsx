import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useLogin, useActiveUser } from '../hooks/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = useLogin();

  const activeUser = useActiveUser();

  if(activeUser) return <Redirect to="/"/>;


  const handleSubmit = event => {
    event.preventDefault();
    login(username, password)
      .then(() => history.push('/'));
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input type ='text' name = 'username' value = {username} placeholder = 'UserName' onChange = {({ target }) => setUsername(target.value)}/>
      <input type ='text' name = 'password' value= {password} placeholder = 'PassWord' onChange = {({ target }) => setPassword(target.value)}/>
      <button>LOGIN</button>
    </form>
  );
}
