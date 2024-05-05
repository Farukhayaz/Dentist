// Navbar.js
import React, { useState } from 'react';
import { FaBars,FaArrowDown } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
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
        <li><Link ClassName={styles.active}  to="/">Home</Link></li>
        <li><Link ClassName={styles.active}  to="/dentist">Find a Dentist</Link></li>
        <li><Link ClassName={styles.active}  to="/about">About us</Link></li>
        <li><Link ClassName={styles.active}  to="/contact">Contact us</Link></li>
      <CustomButton title="Signup / Login" variant="primary" Icon={FaArrowDown} size="normal1" />
      </ul>

    </nav>
  );
}

export default Navbar;
