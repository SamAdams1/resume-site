import React from 'react'

const educationArr = [
  {
    title: "TechWise Certificate",
    desc: "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint and supported by Google that identifies and empowers capable students, preparing them for high-growth tech careers. A holistic program cultivating Industry-Ready Skills in Python, Web Development, DSA, and Corporate Proficiency, TechWise enables its participants to be job-ready.",
  },
  {
    title: "Computer Science and Innovation Associates Degree:",
    desc: "Learned about Data Structures and Algorithms, Quality Assurance, Object-Oriented Programming",
    }
];

const Education = () => {
  return (
    <div>
    <h1>Education</h1>
      {educationArr.map((educationDict) => (
              <div className='educationOne'>
                <h2>{educationDict.title}</h2>
                <h3>{educationDict.desc}</h3>
              </div>
          ))}
    </div>
  )
}

export default Education