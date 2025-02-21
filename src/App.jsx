import "./App.css";

import { useState } from "react";

import Builder from "./components/Builder/Builder";
import Resume from "./components/Resume/Resume";

function App() {
  //======== PERSONAL INFO PART ===================================================================
  // hold person object
  const [person, setPerson] = useState({
    name: "John Doe",
    phone: "+99 (99) 99999-9999",
    email: "john@doe.com",
    social: "linkedin/johndoe",
  });

  // Generic handler to update person object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //======== EDUCATIONAL EXPRERIENCE PART ===================================================================

  // Educational experience info
  const [educationalExp, setEducationalExp] = useState([
    {
      schoolName: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      startDate: "August 2016",
      endDate: "May 2020",
    },
  ]);

  // Add new educational exp
  const addEduExp = () => {
    setEducationalExp((prevState) => [
      ...prevState,
      {
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  // Delete educational exp by index
  const deleteEduExp = (index) => {
    setEducationalExp((prevState) => prevState.filter((_, i) => i !== index));
  };

  // Update Educational exp object
  const handleEduChange = (e, index) => {
    const { name, value } = e.target;
    setEducationalExp((prevState) =>
      prevState.map((exp, i) => (i === index ? { ...exp, [name]: value } : exp))
    );
  };

  //======== PRACTICAL EXPRERIENCE PART ===================================================================

  // Practical experience info (list)
  const [practicalExp, setPracticalExp] = useState([
    {
      company: "TechNova Solutions",
      position: "Software Engineer",
      details:
        "Developed and maintained scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to design and implement new features. Optimized application performance, reducing load times by 30%.",
      startDate: "June 2020",
      endDate: "June 2025",
    },
  ]);

  // Add new practical exp
  const addPracticalExp = () => {
    setPracticalExp((prevState) => [
      ...prevState,
      {
        company: "",
        position: "",
        details: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  // Delete practical exp by index
  const deletePracticalExp = (index) => {
    setPracticalExp((prevState) => prevState.filter((_, i) => i !== index));
  };

  // Update Educational exp object
  const handlePracticalChange = (e, index) => {
    const { name, value } = e.target;
    setPracticalExp((prevState) =>
      prevState.map((exp, i) => (i === index ? { ...exp, [name]: value } : exp))
    );
  };

  // ========= CLEAR ALL FIELDS ===============================================================
  // Clear form fields
  const handleClearAll = () => {
    setPerson({
      name: "",
      phone: "",
      email: "",
      social: "",
    });
    setEducationalExp([]);
    setPracticalExp([]);
  };

  return (
    <>
      <div className="container">
        <Builder
          // Basic info
          person={person}
          handleChange={handleChange}
          // Educational exp
          educationalExp={educationalExp}
          handleEduChange={handleEduChange}
          addEduExp={addEduExp}
          deleteEduExp={deleteEduExp}
          // Practical exp
          practicalExp={practicalExp}
          handlePracticalChange={handlePracticalChange}
          addPracticalExp={addPracticalExp}
          deletePracticalExp={deletePracticalExp}
        />
        <Resume
          person={person}
          educationalExp={educationalExp}
          practicalExp={practicalExp}
          handleClearAll={handleClearAll}
        />
      </div>
    </>
  );
}

export default App;
