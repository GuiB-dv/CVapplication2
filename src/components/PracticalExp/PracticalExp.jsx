import React from "react";
import styles from "./PracticalExp.module.css";
import MonthYearInput from "../DateInput/DateInput";

const PracticalExp = ({
  practicalExp,
  handlePracticalChange,
  deletePracticalExp,
}) => {
  return (
    <div>
      {practicalExp.map((exp, index) => (
        <div className={styles.formContainer} key={index}>
          <form className={styles.form}>
            <label>
              <span>Company: </span>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handlePracticalChange(e, index)}
              />
            </label>
            <label>
              <span>Position: </span>
              <input
                type="text"
                name="position"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handlePracticalChange(e, index)}
              />
            </label>
            <label>
              <span>Details: </span>
              <textarea
                className={styles.detailsText}
                name="details"
                placeholder="Details"
                value={exp.details}
                onChange={(e) => handlePracticalChange(e, index)}
              />
            </label>
            <label>
              <span>Start date: </span>
              <MonthYearInput
                name="startDate"
                placeholder=" "
                value={exp.startDate}
                onChange={(value) =>
                  handlePracticalChange(
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
                  handlePracticalChange(
                    { target: { name: "endDate", value } },
                    index
                  )
                }
              />
            </label>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                deletePracticalExp(index);
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

export default PracticalExp;
