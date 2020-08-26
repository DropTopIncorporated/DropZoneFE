import React from 'react';
import logo from '../../photos/logo2-green.png';
import styles from './Header.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import { Link } from 'react-router-dom';
import { useActiveUser, useLogout } from '../../hooks/AuthContext';

const Header = () => {
  const logOut = useLogout();
  const currentUser = useActiveUser();

  const AuthLinks = () => (
    <>
      <LoginButton />
      <SignUpButton />
    </>
  );
  
  //get user state 
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <img src={logo} className={styles.logo}/>
      </Link>
      {currentUser
        ? <button onClick={logOut}>Logout</button>
        : <AuthLinks />
      }
    </div>
  );
};

export default Header;
