// MainSection.js
import React from 'react';
import { GrChatOption } from 'react-icons/gr';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { MdSmartToy } from 'react-icons/md';
import styles from './MainSection.module.scss'; // Import SCSS module
import CustomButton from '../CustomButton/CustomButton';

export default function MainSection() {
  return (
    <div>
      <section className={styles.home} id="home">
        <div className={`${styles.home__container} `}>
        
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>FIND ANSWERS TO YOUR <br/> DENTAL EMERGENCIES</h1>
            <p className={styles.home__description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
            </p>
            <div className={styles.chat}>
              <div className={styles.one}>
                <GrChatOption className={styles.ic} />
                <h2> Chat with Professionals</h2>
              </div>
              <div className={styles.one}>
                <GoDeviceCameraVideo className={styles.ic} />
                <h2> Video Consultation</h2>
              </div>
              <div className={styles.one}>
                <MdSmartToy className={styles.ic} />
                <h2> Chat with AI</h2>
              </div>
            </div>
            <CustomButton title="Book Appointment" variant="primary" size="medium" />

          </div>
          <div className={styles.home__img}>
            <img src="/images/teth.png" alt="Teeth" />
            <CustomButton title="Start" variant="secondary" size="normal" />

          </div>
        </div>
      </section>
    </div>
  );
}
