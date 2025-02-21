import React from "react";
import styles from "./Resume.module.css";

const Resume = ({ person, educationalExp, practicalExp, handleClearAll }) => {
  const handlePrint = () => {
    window.print(); // Trigger the browser's print dialog
  };
  return (
    <>
      <div className={styles.resume}>
        <h1 className={styles.h1}>Resume</h1>
        {/* header */}
        <div className={styles.a4Paper}>
          <div className={styles.content}>
            <section>
              <h2>{person.name}</h2>
              <p className={styles.personalInfo}>
                {person.phone} | {person.email} | {person.social}
              </p>
            </section>
            {/* content EDUCATION */}
            <section>
              <h3>EDUCATION</h3>
              <hr />
              {educationalExp.map((exp, index) => (
                <div key={index}>
                  <span className={styles.spanTitle}>{exp.schoolName}</span>
                  <span className={styles.spanDate}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <p>{exp.degree}</p>
                </div>
              ))}
            </section>
            {/* content EXPERIENCE */}
            <section>
              <h3>EXPERIENCE</h3>
              <hr />
              {practicalExp.map((exp, index) => (
                <div key={index}>
                  <span className={styles.spanTitle}>{exp.company}</span>
                  <span className={styles.spanDate}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <p>{exp.position}</p>
                  <p className={styles.details}>{exp.details}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
        {/* Download and clear buttons */}
        <div className={styles.buttonDiv}>
          <button onClick={handleClearAll}>Clear</button>
          <button onClick={handlePrint}>Download PDF</button>
        </div>
      </div>
    </>
  );
};

export default Resume;
