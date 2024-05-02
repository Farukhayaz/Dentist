import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./Dentist.module.scss"
export default function Dentist() {
  return (
    <div>
        <div className={styles.dentist} >
           <div className={styles.im}> <img src='/images/Group.png' alt='img'/></div>
           <div className={styles.di}>
            <div className={styles.d1}>
                <h1>ARE YOU A DENTIST?</h1>
                <p className={styles.p} >Sign up now and expand your patient network effortlessly.</p>
                <p className={styles.p1} ><FaLongArrowAltRight className={styles.ico}/> Get more patients at the comfort of your own office.</p>
                <p className={styles.p1} ><FaLongArrowAltRight className={styles.ico}/> Get more patients at the comfort of your own office.</p>
                <p className={styles.p1} ><FaLongArrowAltRight className={styles.ico}/> Get more patients at the comfort of your own office.</p>
                <p className={styles.p1} ><FaLongArrowAltRight className={styles.ico}/> Get more patients at the comfort of your own office.</p>
            </div>
           </div>
        </div>
    </div>
  )
}
