let imageData = [
  {
    src: "./src/assets/icons/javascript.svg",
    key: 1,
  },
  {
    src: "./src/assets/icons/python.svg",
    key: 2,
  },
  {
    src: "./src/assets/icons/react.svg",
    key: 3,
  },
  {
    src: "./src/assets/icons/mongodb-icon.svg",
    key: 4,
  },
  {
    src: "./src/assets/icons/expressjs.svg",
    key: 5,
  },
  {
    src: "./src/assets/icons/godot.svg",
    key: 6,
  },
]


const TechSkills = () => {
  return (
    <div className="techSkills">
      <h1>Technical Skills</h1>

      <div className="skillGrid">
        {imageData.map((imgOptions, index) => (
          <>
            <div className={"balloons anim"+index%2} key={"ballonDiv"+index}>
              <img src="./src/assets/balloon.png" alt="" className={"balloonImg anim"} key={"balloon"+index}/>
              <img src={imgOptions.src} alt="" className="skillImg" key={"img"+index}/>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default TechSkills