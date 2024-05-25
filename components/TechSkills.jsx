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
  return (
    <div className="techSkills">
      <h1>Technical Skills</h1>

      <div className="skillGrid">
        {imageData.map((imgOptions, index) => (
          <>
            {console.log()}
            <div className={"balloons anim"+index%2}>
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