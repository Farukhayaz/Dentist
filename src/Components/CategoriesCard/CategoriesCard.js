// CategoriesCard.js
import React from 'react';
import styles from './CategoriesCard.module.scss'; // Import SCSS module
import CustomButton from '../CustomButton/CustomButton';
import { FaLongArrowAltRight } from "react-icons/fa";

const CategoriesCard = ({ imgSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <CustomButton title="Get appointment" variant="primary" icon={FaLongArrowAltRight} size="simple" />

      {/* <a href="/" className={`${styles.button} ${styles['button-link']}`}>Get appointment</a> */}
    </div>
  );
}

export default CategoriesCard;
