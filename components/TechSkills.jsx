import info from "./info.json";
import balloonImg from "../src/assets/balloon.png";
import javascriptIcon from "../src/assets/icons/javascript.svg";
import pythonIcon from "../src/assets/icons/python.svg";
import reactIcon from "../src/assets/icons/react.svg";
import mongodbIcon from "../src/assets/icons/mongodb-icon.svg";
import expressjsIcon from "../src/assets/icons/expressjs.svg";
import godotIcon from "../src/assets/icons/godot.svg";

const iconMap = {
  "./src/assets/icons/javascript.svg": javascriptIcon,
  "./src/assets/icons/python.svg": pythonIcon,
  "./src/assets/icons/react.svg": reactIcon,
  "./src/assets/icons/mongodb-icon.svg": mongodbIcon,
  "./src/assets/icons/expressjs.svg": expressjsIcon,
  "./src/assets/icons/godot.svg": godotIcon,
};

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
              src={balloonImg}
              className={"balloonImg anim"}
              key={"balloon" + index}
            />
            <img
              src={iconMap[imgOptions.src]}
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
