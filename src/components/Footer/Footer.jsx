import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/Header.css';

const Footer = () => {

  return (
    <>
      <Link to='/aboutus' className={styles.aboutUs} >
        <div>
          About Us
        </div>
      </Link>
    </>
    
  );
};

export default Footer;
