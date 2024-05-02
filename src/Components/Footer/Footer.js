// Footer.js

import React from 'react';
import styles from './Footer.module.scss';
import MainFooter from './MainFooter';

const Footer = () => {
  return (
  <div className={styles.main} >
<div className={styles.di}>
<img className={styles.logo} src='/images/logo2.png' alt='img' />

</div>
      <div className={styles.customShapeDividerTop}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
          className={styles.shapeFill}
        ></path>
      </svg>
      
    </div>
    
    {/* ---footer- */}
    <div className={styles.footer}>

<MainFooter/>
    </div>
  </div>
  );
};

export default Footer;



