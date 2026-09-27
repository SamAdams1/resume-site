import info from "./info.json";

const Education = () => {
  return (
    <>
      <h1 id="education">Education</h1>
      <div className="educationSect">
        {info.education.map((educationDict) => (
          <div className="educationSingle">
            <h2>{educationDict.title}</h2>
            <h3>{educationDict.location}</h3>
            <h4>{educationDict.desc}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
