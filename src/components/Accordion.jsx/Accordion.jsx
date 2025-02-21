import React, { useState } from "react";
import styles from "./Accordion.module.css"; // Import your CSS module

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.div}>
        <h2 className={styles.accordion} onClick={toggleAccordion}>
            {title}
            <span className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}> {isOpen ? "-" : "+"}
        </span>
        </h2>
        <div className={styles.accordionContent}>{isOpen && children}</div>
      </div>
    </>
  );
};

export default Accordion;