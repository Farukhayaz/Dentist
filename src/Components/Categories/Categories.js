// Categories.js
import React from 'react';
import CategoriesCard from '../CategoriesCard/CategoriesCard'; // Import CategoriesCard component
import styles from './Categories.module.scss'; // Import SCSS module

const Categories = () => {
  return (
    <section className={styles.decoration + " bd-container"} id="decoration">
      <h1 className={styles['section-title']}>CATEGORIES</h1>
      <div className={styles['decoration__container'] + " bd-grid"}>
        <CategoriesCard imgSrc="/images/happy-tooth.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />
        <CategoriesCard imgSrc="/images/add.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />
        <CategoriesCard imgSrc="/images/braces.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />
        <CategoriesCard imgSrc="/images/bridge.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />
        <CategoriesCard imgSrc="/images/mouth.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />
        <CategoriesCard imgSrc="/images/root-canal.png" title="General Dentistry" description="Dental care is the maintenance of teeth, the practice of keeping mouth clean due pleasure rationally encounter." />

      </div>
    </section>
  );
}

export default Categories;
