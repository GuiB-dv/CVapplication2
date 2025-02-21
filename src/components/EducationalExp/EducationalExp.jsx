import React from "react";
import styles from "./EducationalExp.module.css";
import MonthYearInput from "../DateInput/DateInput";

const EducationalExp = ({ educationalExp, handleEduChange, deleteEduExp }) => {
  return (
    <div>
      {educationalExp.map((exp, index) => (
        <div className={styles.formContainer} key={index}>
          <form className={styles.form}>
            <label>
              <span>University/School: </span>
              <input
                type="text"
                name="schoolName"
                placeholder="University"
                value={exp.schoolName}
                onChange={(e) => handleEduChange(e, index)}
              />
            </label>
            <label>
              <span>Degree: </span>
              <input
                type="text"
                name="degree"
                placeholder="Bachelors degree"
                value={exp.degree}
                onChange={(e) => handleEduChange(e, index)}
              />
            </label>
            <label>
              <span>Start date: </span>
              <MonthYearInput
                name="startDate"
                placeholder=" "
                value={exp.startDate}
                onChange={(value) =>
                  handleEduChange(
                    { target: { name: "startDate", value } },
                    index
                  )
                }
              />
            </label>
            <label>
              <span>End date: </span>
              <MonthYearInput
                name="endDate"
                placeholder=" "
                value={exp.endDate}
                onChange={(value) =>
                  handleEduChange({ target: { name: "endDate", value } }, index)
                }
              />
            </label>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                deleteEduExp(index);
              }}
            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default EducationalExp;
