import React from 'react';
import SearchBar from './SearchBar';
import logo from '../../photos/logo2-green.png';
import styles from './Header.css'
import LogoutButton from './Logout';

const Header = () => {
  //get user state 
  return(
    <div className={styles.headerContainer}>
      <img src={logo} className={styles.logo}/>
      <SearchBar />
      {/* {user? //logout button OR login/signup button>} */}
      <LogoutButton/>
    </div>
  )
}

export default Header;