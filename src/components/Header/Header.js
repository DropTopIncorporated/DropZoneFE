import React from 'react';
import logo from '../../photos/logo2-green.png';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import { useActiveUser, useLogout } from '../../hooks/AuthContext';
import Title from './Title';

const Header = () => {
  const logOut = useLogout();
  const currentUser = useActiveUser();

  const AuthLinks = () => (
    <div className={styles.noUser}>
      <Link to='/login'>
        <button className={styles.loginButton}>Login</button>
      </Link>
      <Link to='/signup'>
        <button className={styles.signupButton}>Sign Up</button>
      </Link>
    </div>
  );

  const UserSignedIn = () => (
    <div>
      <Link to='/favorites' >
        <button className={styles.favoritesButton}>
      Favorites
        </button>
      </Link>
      <button 
        onClick={logOut}
        className={styles.logoutButton}
      >Logout</button >
    </div>
  );
  
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <img src={logo} className={styles.logo}/>
      </Link>
      <Title />
      {currentUser
        ? <UserSignedIn/>
        : <AuthLinks />
      }
    </div>
  );
};

export default Header;
