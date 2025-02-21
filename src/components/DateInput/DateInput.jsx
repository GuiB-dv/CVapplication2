import React, { useState } from "react";

const MonthYearInput = ({ value, onChange }) => {
  const [month, setMonth] = useState(value ? value.split(" ")[0] : "");
  const [year, setYear] = useState(value ? value.split(" ")[1] : "");

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    onChange(`${newMonth} ${year}`.trim()); // Combine month and year
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setYear(newYear);
    onChange(`${month} ${newYear}`.trim()); // Combine month and year
  };

  return (
    <div>
      <select value={month} onChange={handleMonthChange}>
        <option value="">Month</option>
        <option value="Now">Now</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={handleYearChange}
        min="1900"
        max="2100"
      />
    </div>
  );
};

export default MonthYearInput;
