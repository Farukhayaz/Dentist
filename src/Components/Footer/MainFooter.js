// MainFooter.js

import React from 'react';
import styles from "./MainFooter.module.scss";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
        <div>
            <h2>DESCRIPTION</h2>
            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div>
            <h2>COMPANY</h2>
            <ul>
              <li><a href="/" >Emergency Dental Care .AI New York, USA</a></li>
              <li><a href="/" >+1 234 567 8910</a></li>
              <li><a href="/" >Info@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h2>QUICK LINKS</h2>
            <ul>
              <li><a href="/" >About us</a></li>
              <li><a href="/" >Contact us</a></li>
              <li><a href="/" >FAQ's</a></li>
            </ul>
          </div>
          <div>
            <h2>SOCIAL MEDIA</h2>
            <ul>
              <li><a href="/" > <FaFacebook className={styles.icon} />Facebook</a></li>
              <li><a href="/" ><RiInstagramFill className={styles.icon} /> Instagram</a></li>
              <li><a href="/" ><FaSquareXTwitter className={styles.icon} /> X</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_bottom}>Copyright © 2024  <span>   Emergency Dental Care .AI  </span> All Rights Reserved
          <div className="social-icons">
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
