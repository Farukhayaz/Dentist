// Pricing.js
import React from 'react';
import styles from './Pricing.module.scss'; // Correct import statement for SCSS module
import PricingCard from '../PricingCard/PricingCard';

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
        <PricingCard price="135" title="Pediatric Dentistry" li="First description" li2="Second Description" li3="Third description" li4="Fourth description" li5="Fifth description" />
        <PricingCard price="135" title="Pediatric Dentistry" li="First description" li2="Second Description" li3="Third description" li4="Fourth description" li5="Fifth description" />
        <PricingCard price="135" title="Pediatric Dentistry" li="First description" li2="Second Description" li3="Third description" li4="Fourth description" li5="Fifth description" />

      </div>
    </div>
  );
};

export default Pricing;
