import { useState } from 'react'
import './reset.css'
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
      <div className="parentDiv"><div className="sun"></div></div>

      {/* <h1>Sam Adams' Resume</h1> */}
      <div className="sections">
        <IntroSection />
        <img src="./src/assets/clouds.png" alt="" className="clouds" />
        <TechSkills />
        <img src="./src/assets/clouds.png" alt="" className="clouds flipped" />

        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
      </div>
      
      <div className='horizon'></div>
    </>
  )
}
 

export default App
