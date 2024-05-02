import React from 'react'
import styles from "./DModel.module.scss"
import { FaArrowRight  } from "react-icons/fa";
import CustomButton from '../CustomButton/CustomButton'
export default function DModel() {
  return (
    <div>
<div className={styles.model}>
<div className={styles.modeldiv}>
    <h1>
    Ai 3-d model
    </h1>
    <p>This innovative feature enables you to communicate your concerns effectively with your dentist, facilitating personalized and targeted solutions for your dental discomfort. Take control of your oral health...</p>
    <div className={styles.section}>
        <h2> <FaArrowRight  className={styles.icon}/> Select Teeth</h2>
        <h2> <FaArrowRight  className={styles.icon}/> Select Teeth</h2>
        <h2> <FaArrowRight  className={styles.icon}/> Select Teeth</h2>
    </div>
    <CustomButton title="Chat with AI" variant="primary"  size="primary3" />

</div>
</div>
    </div>
  )
}
