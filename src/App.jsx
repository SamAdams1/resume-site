import { useState } from 'react'
import './reset.css'
import './App.css'
import IntroSection from '../components/Intro.jsx'
import ProjectsSection from '../components/Projects.jsx'
import EducationSection from '../components/Education.jsx'
import ExperienceSection from '../components/Experience.jsx'
import TechSkills from '../components/TechSkills.jsx'
import Header from '../components/Header.jsx'


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="parentDiv">
        <div className="sun"></div>
      </div>
        <Header />

        <div className="firstSect">
          <IntroSection />
        </div>

        <img src="./src/assets/clouds.png" className="clouds"/>
        <div className="cloudSect">
          <div className="coverGap gap1"></div>
          <ProjectsSection />
          <div className="coverGap gap2"></div>
        </div>
        <img src="./src/assets/clouds.png" className="clouds flipped" />

        <TechSkills />

        <div className="parallax">
          <img src="./src/assets/mtn1.png" className="mountain mtn1" />
          <img src="./src/assets/mtn2.png" className="mountain mtn2" />
          <img src="./src/assets/mtn3.png" className="mountain mtn3" />
        </div>

        <div className="mtnSect">
          <EducationSection />
        </div>

        <div className="treeSect parallax">
          <img src="./src/assets/tree1.png" className="trees tree1" />
          <img src="./src/assets/tree2.png" className="trees tree2" />
        </div>

        <div className='finalSect'>
            <ExperienceSection />
            <img src="./src/assets/mtn-sunset.png" className='sunset-photo' />
        </div>
      
      <div className='footer'></div>
    </div>
  )
}
 

export default App
