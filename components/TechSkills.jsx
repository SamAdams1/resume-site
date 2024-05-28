let imageData = [
  {
    src: "./src/assets/icons/javascript.svg",
  },
  {
    src: "./src/assets/icons/python.svg",
  },
  {
    src: "./src/assets/icons/react.svg",
  },
  {
    src: "./src/assets/icons/mongodb-icon.svg",
  },
  {
    src: "./src/assets/icons/expressjs.svg",
  },
  {
    src: "./src/assets/icons/godot.svg",
  },
]


const TechSkills = () => {
  let altArr = [];
  for (let index = 0; index < imageData.length; index++) {
    const element = imageData[index].src;
    altArr.push(element.split("/").at(-1))
  }

  return (
    <div className="techSkills" id="skills">
      <h1 id="skillsTitle">Technical Skills</h1>

      <div className="skillGrid">
        {imageData.map((imgOptions, index) => (
          <div className={"balloons anim" + index % 2} key={"ballonDiv" + index}>

            <img src="./src/assets/balloon.png" className={"balloonImg anim"} key={"balloon" + index}/>
            <img src={imgOptions.src} alt={altArr[index]} className={"skillImg skill" + index} key={"img" + index}/>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TechSkills;