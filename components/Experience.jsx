import React from 'react'

const experienceArr = [
  {
    title: "Cashier, Bagger - HannaFord Grocery Store",
    date: "2018-2024",
    desc: "Learned adaptability in unexpected situations, time management while under pressure, problem-solving, organization, and teamwork with coworkers.",
  },
];

const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      {experienceArr.map((experienceDict, index) => (
          <div className='experienceSingle'>
              <h2>{experienceDict.title}</h2>
              <h3>{experienceDict.date}</h3>
              <h3>{experienceDict.desc}</h3>
          </div>
      ))}
    </>
    )

}


export default Experience;