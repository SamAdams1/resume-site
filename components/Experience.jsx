import React from 'react'

const experienceArr = [
  {
    title: "Cashier",
    company: "MarketBasket",
    date: "2020 - 2022",
    desc: "Learned adaptability in unexpected situations, organization, and teamwork with coworkers.",
  },
  {
    title: "Service Clerk",
    company: "HannaFord",
    date: "2022 - 2024",
    desc: "Learned the importance of communication, time management while under pressure, and problem-solving.",
  },
];

const Experience = () => {
  return (
    <div className='experienceSect'>
      <h1 id='experience'>Experience</h1>
      {experienceArr.map((experienceDict, index) => (
          <div className='experienceSingle'>
              <div className="circle"></div>
              {experienceArr.length > index + 1 && <div className="vline"></div>}
              
              <div className="expText">
                <h2>{experienceDict.title}</h2>
                <h3>{experienceDict.company}</h3>
                <h3>{experienceDict.date}</h3>
                <h4>{experienceDict.desc}</h4>
              </div>
          </div>
      ))}
    </div>
    )

}


export default Experience;