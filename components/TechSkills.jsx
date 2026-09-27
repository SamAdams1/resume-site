import info from "./info.json";

const TechSkills = () => {
  let altArr = [];
  for (let index = 0; index < info.techSkills.length; index++) {
    const element = info.techSkills[index].src;
    altArr.push(element.split("/").at(-1));
  }

  return (
    <div className="techSkills" id="skills">
      <h1 id="skillsTitle">Technical Skills</h1>

      <div className="skillGrid">
        {info.techSkills.map((imgOptions, index) => (
          <div
            className={"balloons anim" + (index % 2)}
            key={"ballonDiv" + index}
          >
            <img
              src="./src/assets/balloon.png"
              className={"balloonImg anim"}
              key={"balloon" + index}
            />
            <img
              src={imgOptions.src}
              alt={altArr[index]}
              className={"skillImg skill" + index}
              key={"img" + index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
