import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Frequently.module.scss';

const Frequently = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
    accordionRefs.current.forEach((contentRef, index) => {
      if (index === activeAccordionIndex) {
        contentRef.style.maxHeight = `${contentRef.scrollHeight}px`;
      } else {
        contentRef.style.maxHeight = '0px';
      }
    });
  }, [activeAccordionIndex]);

  const toggleAccordion = (index) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
  };

  const faqData = [
    { question: 'What services does Emergency Dental Health offer?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...' },
    { question: 'How do I schedule an appointment?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident... ' },
    { question: 'Do you accept insurance?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...' },
    { question: 'How do I reschedule an appointment?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident... ' }
  ];

  return (
    <div className={styles.faq_container}>
      <h1>FREQUENTLY ASKED</h1>
  <p className={styles.p}>Questions</p>
      {faqData.map((faq, index) => (
        <div className={`${styles.accordion} ${activeAccordionIndex === index ? styles.active : ''}`} key={index}>
          <button className={styles.accordion_button} onClick={() => toggleAccordion(index)}>
            <div className={styles.accordion_header}>
              <h2>{faq.question}</h2>
              <FaArrowUp className={`${styles.icon} ${activeAccordionIndex === index ? styles.active : ''}`} />
            </div>
            <div
              ref={(el) => (accordionRefs.current[index] = el)}
              className={`${styles.accordion_content} ${activeAccordionIndex === index ? styles.active : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Frequently;
