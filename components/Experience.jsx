import React from "react";
import info from "./info.json";

const Experience = () => {
  return (
    <div className="experienceSect">
      <h1 id="experience">Experience</h1>
      {info.experience.map((experienceDict, index) => (
        <div className="experienceSingle">
          <div className="circle"></div>
          {info.experience.length > index + 1 && <div className="vline"></div>}

          <div className="expText">
            <h2>{experienceDict.title}</h2>
            <h3>{experienceDict.company}</h3>
            <h3>{experienceDict.date}</h3>
            <h4>{experienceDict.desc}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
