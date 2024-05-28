const educationArr = [
  {
    title: "TechWise Certificate",
    location: "Online",
    desc: "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint and supported by Google that identifies and empowers capable students, preparing them for high-growth tech careers. A holistic program cultivating Industry-Ready Skills in Python, Web Development, DSA, and Corporate Proficiency, TechWise enables its participants to be job-ready.",
  },
  {
    title: "Computer Science and Innovation Associates Degree:",
    location: "Manchester Community College, NH, USA",
    desc: "Learned about Data Structures and Algorithms, Quality Assurance, Object-Oriented Programming",
  },
];

const Education = () => {
  return (
  <>
    <h1  id='education'>Education</h1>
    <div className='educationSect'>

      {educationArr.map((educationDict) => (
        <div className='educationSingle'>
          <h2>{educationDict.title}</h2>
          <h3>{educationDict.location}</h3>
          <h4>{educationDict.desc}</h4>
        </div>
        ))}
      </div>
  </>
  )
}

export default Education