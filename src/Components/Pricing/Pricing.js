// Pricing.js
import React from 'react';
import styles from './Pricing.module.scss'; // Correct import statement for SCSS module
import { TiTick } from "react-icons/ti";
import CustomButton from "../CustomButton/CustomButton"

const Pricing = () => {
  return (
    <div className={styles.pricing + ' bd-container'}> {/* Use styles from SCSS module */}
      <div className={styles['main-title']}>
        <h1>Show your pricing plans</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's standard dummy text.
        </p>
      </div>
      <div className={styles['pricing-plans-container']}>
        <div className={styles['pricing-plan']}>
          <div className={styles.price} style={{ backgroundImage: "url(/images/Intersect.png)", backgroundSize: "100% 100%" }}>
            <h1>$135</h1>
          </div>
          <div className={styles['plan-details']}>
            <div className={styles.category}> Pediatric Dentistry </div>
            <ul>
              <li><TiTick className={styles.tick} /> First description</li>
              <li><TiTick className={styles.tick} /> Second description</li>
              <li><TiTick className={styles.tick} /> Third description</li>
              <li><TiTick className={styles.tick} /> Fourth description</li>
              <li><TiTick className={styles.tick} /> Fifth description</li>
            </ul>
                       <CustomButton title="Subscription" variant="primary" size="primary2" />

          </div>
        </div>
        {/* ---2----- */}
        <div className={styles['pricing-plan']}>
          <div className={styles.price} style={{ backgroundImage: "url(/images/Intersect.png)", backgroundSize: "100% 100%" }}>
            <h1>$135</h1>
          </div>
          <div className={styles['plan-details']}>
            <div className={styles.category}> Pediatric Dentistry </div>
            <ul>
              <li><TiTick className={styles.tick} /> First description</li>
              <li><TiTick className={styles.tick} /> Second description</li>
              <li><TiTick className={styles.tick} /> Third description</li>
              <li><TiTick className={styles.tick} /> Fourth description</li>
              <li><TiTick className={styles.tick} /> Fifth description</li>
            </ul>
                       <CustomButton title="Subscription" variant="primary" size="primary2" />

          </div>
        </div>
        <div className={styles['pricing-plan']}>
          <div className={styles.price} style={{ backgroundImage: "url(/images/Intersect.png)", backgroundSize: "100% 100%" }}>
            <h1>$135</h1>
          </div>
          <div className={styles['plan-details']}>
            <div className={styles.category}> Pediatric Dentistry </div>
            <ul>
              <li><TiTick className={styles.tick} /> First description</li>
              <li><TiTick className={styles.tick} /> Second description</li>
              <li><TiTick className={styles.tick} /> Third description</li>
              <li><TiTick className={styles.tick} /> Fourth description</li>
              <li><TiTick className={styles.tick} /> Fifth description</li>
            </ul>
            <CustomButton title="Subscription" variant="primary" size="primary2" />
          </div>
        </div>
        {/* Repeat for other pricing plans */}
      </div>
    </div>
  );
};

export default Pricing;
