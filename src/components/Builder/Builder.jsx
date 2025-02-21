import styles from "./Builder.module.css";

import BasicInfo from "../BasicInfo/BasicInfo";
import EducationalExp from "../EducationalExp/EducationalExp";
import PracticalExp from "../PracticalExp/PracticalExp";
import Accordion from "../Accordion.jsx/Accordion";

const Builder = ({
  person,
  handleChange,
  educationalExp,
  handleEduChange,
  practicalExp,
  handlePracticalChange,
  addPracticalExp,
  deletePracticalExp,
  addEduExp,
  deleteEduExp,
}) => {
  return (
    <>
      <div className={styles.builder}>
        <h1>Build your Resume</h1>
        <div className={styles.buildContainer}>
          {/* Basic info accordion */}
          <Accordion title="Personal details">
            <BasicInfo person={person} handleChange={handleChange} />
          </Accordion>
          {/* Educational exp accordion */}
          <Accordion title="Education">
            <EducationalExp
              educationalExp={educationalExp}
              handleEduChange={handleEduChange}
              addEduExp={addEduExp}
              deleteEduExp={deleteEduExp}
            />
            <button
              type="button"
              className={styles.addButton}
              onClick={(e) => {
                e.stopPropagation();
                addEduExp();
              }}
            >
              Add
            </button>
          </Accordion>
          {/* Practical exp accordion */}
          <Accordion title="Experience">
            <PracticalExp
              practicalExp={practicalExp}
              handlePracticalChange={handlePracticalChange}
              addPracticalExp={addPracticalExp}
              deletePracticalExp={deletePracticalExp}
            />
            <button
              type="button"
              className={styles.addButton}
              onClick={(e) => {
                e.stopPropagation();
                addPracticalExp();
              }}
            >
              Add
            </button>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Builder;
