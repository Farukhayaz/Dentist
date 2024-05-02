// Navbar.js
import React, { useState } from 'react';
import { FaBars,FaArrowDown } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import CustomButton from '../CustomButton/CustomButton';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.navbar}>
   <div className={styles.mainn}>
   {/* <div className={styles.logo}>Logo</div> */}
   <img className={styles.logo} src='/images/logo1.png' alt='Logo'/>
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>
   </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Find a Dentist</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Contact us</a></li>
      <CustomButton title="Signup / Login" variant="primary" icon={FaArrowDown} size="normal1" />
      </ul>

    </nav>
  );
}

export default Navbar;
