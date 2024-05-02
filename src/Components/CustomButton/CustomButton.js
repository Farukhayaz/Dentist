// CustomButton.js
import React from "react";
import styles from "./CustomButton.module.scss"; // Import SCSS module

const CustomButton = ({ title, variant, Icon, size }) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={className}>
      {title}
      {Icon && <Icon className={styles.icon} />} {/* Render the icon dynamically */}
    </button>
  );
};

export default CustomButton;
