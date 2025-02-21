import React from "react";
import styles from "./BasicInfo.module.css";

const BasicInfo = ({ person, handleChange }) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label>
          <span>Full name: </span>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={person.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Phone Number: </span>
          <input
            type="tel"
            name="phone"
            placeholder="+XX (XX) XXXXX-XXXX"
            value={person.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            placeholder="e@mail.com"
            value={person.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Social: </span>
          <input
            type="text"
            name="social"
            placeholder="social"
            value={person.social}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default BasicInfo;
