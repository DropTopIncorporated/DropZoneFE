import React from 'react';
import logo from '../../photos/logo2-green.png';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import { useActiveUser, useLogout } from '../../hooks/AuthContext';

const Header = () => {
  const logOut = useLogout();
  const currentUser = useActiveUser();

  const AuthLinks = () => (
    <div className={styles.noUser}>
      <Link to='/aboutus' className={styles.aboutUs}>
        About Us
      </Link>
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
    <Link to='/aboutus' className={styles.aboutUs2}>
        About Us
      </Link>
      <Link to='/favorites' className={styles.favorites}>
      Favorites
    </Link>
      <button 
      onClick={logOut}
      className={styles.logoutButton}
    >Logout</button >
  </div>
  );
  
  //get user state 
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <img src={logo} className={styles.logo}/>
      </Link>
      {currentUser
        ? <UserSignedIn/>
        : <AuthLinks />
      }
    </div>
  );
};

export default Header;
