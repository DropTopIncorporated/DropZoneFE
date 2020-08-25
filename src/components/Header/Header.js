import React from 'react';
import SearchBar from './SearchBar';
import logo from '../../photos/logo2-green.png';
import styles from './Header.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import { Link } from 'react-router-dom';

const Header = () => {
  //get user state 
  return (
    <div className={styles.headerContainer}>
      <Link to='/'>
        <img src={logo} className={styles.logo}/>
      </Link>
      <SearchBar />
      {/* {user? //logout button OR login/signup button>} */}
      <LoginButton />
      <SignUpButton />
    </div>
  );
};

export default Header;
