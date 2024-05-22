import { useState } from 'react'
import './App.css'
import IntroSection from '../components/Intro.jsx'
import ProjectsSection from '../components/Projects.jsx'
import EducationSection from '../components/Education.jsx'
import ExperienceSection from '../components/Experience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Sam Adams' Resume</h1>
      <IntroSection className="section"/>
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
