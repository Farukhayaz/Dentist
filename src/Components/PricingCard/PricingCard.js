import React from 'react';
import CustomButton from '../CustomButton/CustomButton'; // Assuming CustomButton is in the same directory

import { TiTick } from 'react-icons/ti'; // Assuming TiTick is imported correctly

import styles from './PricingCard.module.scss'; // Import SCSS module

export default function PricingCard({price ,title,li ,li2, li3,li4, li5}) {
  return (
    <div>
      <div className={styles['pricing-plan']}>
        <div className={styles.price} style={{ backgroundImage: "url(/images/Intersect.png)", backgroundSize: "100% 100%" }}>
          <h1>{price}</h1>
        </div>
        <div className={styles['plan-details']}>
          <div className={styles.category}> {title} </div>
          <ul>
            <li><TiTick className={styles.tick} />{li}</li>
            <li><TiTick className={styles.tick} />{li2}</li>
            <li><TiTick className={styles.tick} />{li3}</li>
            <li><TiTick className={styles.tick} />{li4}</li>
            <li><TiTick className={styles.tick} />{li5}</li>
          </ul>
          <CustomButton className={styles.subscription} title="Subscription" variant="primary" size="primary2" />
        </div>
      </div>
    </div>
  );
}
