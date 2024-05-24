import { useState } from 'react'
import './App.css'
import IntroSection from '../components/Intro.jsx'
import ProjectsSection from '../components/Projects.jsx'
import EducationSection from '../components/Education.jsx'
import ExperienceSection from '../components/Experience.jsx'
import TechSkills from '../components/TechSkills.jsx'

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="sun"> 
        <div className="sun2"></div>
      </div>
      <div className="parentDiv">
        <img className="moon" src="./src/assets/Moon.png" alt="" />
      </div>

      {/* <h1>Sam Adams' Resume</h1> */}
      <IntroSection className="section"/>
      <TechSkills />
      <br />
      <br />
      <ProjectsSection />
      <br />
      <br />
      <EducationSection />
      <br />
      <br />
      <ExperienceSection />
    </>
  )
}
 

export default App
