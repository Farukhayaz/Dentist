// TabsBasic.js

import React, { useState } from 'react';
import styles from "./Reviews.module.scss"
import Circles from '../Circles';
import { FaStar } from "react-icons/fa";
export default function TabsBasic() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
 <div className={styles.main}>
  <h1>SOME REVIEWS</h1>
  <p className={styles.p}>Of our patients</p>
       <div className={styles.tabs_container}>
      <div className={styles.tab_list}>
        <div
          className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`}
          onClick={() => handleTabChange(0)}
        >
            <img className={styles.img} src='/images/men.png' alt='img'/>
         <div className={styles.di}>
       <h2>  Jack Sparrow</h2>
         <p>California, USA</p>
         </div>

        </div>
        <div
          className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
          onClick={() => handleTabChange(1)}
        >
            <img className={styles.img} src='/images/men.png' alt='img'/>
         <div className={styles.di}>
       <h2>  Jack Sparrow</h2>
         <p>California, USA</p>
         </div>
        </div>
        <div
          className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
          onClick={() => handleTabChange(2)}
        >
           <img className={styles.img} src='/images/men.png' alt='img'/>
         <div className={styles.di}>
       <h2>  Jack Sparrow</h2>
         <p>California, USA</p>
         </div>
        </div>
      </div>
      <div className={styles.cir}>
        <Circles/>
      </div>
      <div className={styles.tab_content}>
        {activeTab === 0 && <div className={styles.tab_panel}>
            <div>
              <img className={styles.vector_img} src='/images/Vector.png' alt='img'/>
                <p className={styles.para}>11 I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>
               <div>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
</div>
                </div>
            </div>}
        {activeTab === 1 && <div className={styles.tab_panel}>
            <div>
            <img className={styles.vector_img} src='/images/Vector.png' alt='img'/>
            
                <p className={styles.para}>22 I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>
                <div>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
</div>
                </div>
            </div>}
        {activeTab === 2 && <div className={styles.tab_panel}>
            <div>
            <img className={styles.vector_img} src='/images/Vector.png' alt='img'/>
              
                <p className={styles.para}>33 I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.</p>
                <div>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
                <FaStar className={styles.star}/>
</div>
                </div>
            </div>}
      </div>
    </div>
 </div>
  );
}
