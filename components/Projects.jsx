import { SocialIcon } from 'react-social-icons';

const projectsDetailsArr = [
{
title: "Cosmic Campaign",
desc: "A fast-paced top-down space shooter rougelike game, defeat an endless onslaught of enemies to upgrade your ship and take on stronger foes!",
tech: "GDScript, Godot Engine, LibreSprite, AudioMass, GitHub",
repoLink: "https://github.com/SamAdams1/Cosmic-Campaign",
demoLink: "https://sams-studio.itch.io/cosmic-campaign",
},
{
title: "Historical Battle Map",
desc: "A map that displays important historical battles on a world map. Battles are sorted by modern country borders. Click on the red dot to get info on the battle. All location data and summaries sourced from wikipedia.",
tech: "Leaflet Api, Wikipedia Api, JavaScript, HTML, CSS",
repoLink: "https://github.com/SamAdams1/battles-map",
demoLink: "https://samadams1.github.io/battles-map/",
},
{
  title: "Sahara",
  desc: `Amazon clone to learn about React, MongoDB, 
 ExpressJS, user registration/login, and user data 
 security. Developed a deeper understanding of 
 web design principles and good practices.`,
  tech: "MongoDB, JavaScript, DummyJson Api, ExpressJS, Vite, React",
  
  repoLink: "https://github.com/SamAdams1/fakeazon",
},
// {
// title: "AudioBookify",
// desc: `Upload a PDF or .txt file and it will be automatically read and turned into an audiobook!
// This audiobook can then be downloaded to be listened to later offline.
// Change the speed of you narrator. Easily fastforward or rewind your audiobook.`,
// tech: ["MongoDB, Ayfie Api, ExpressJS, Google-Text-To-Speech"],

// repoLink: "https://github.com/AndrewJhD/Course2Group16-sProject",
// },
]

function ProjectsSection() {
return(
  <>
    {/* <button>DarkMode</button> */}
    <h1 id='projects' className='projectsTitle'>Projects</h1>
    <div className='projectsSect'>
      {projectsDetailsArr.map((projectDict, arrIndex) => (
        <div className='singleProject'>
          <h2 key={projectDict.title} className='projectTitle'>{projectDict.title}</h2>
          
          <h3 className='projectDesc'>{projectDict.desc}</h3>

          {projectDict.tech.split(", ").map((techStr , techIndex) => (
            <h4 className='projectTech' key={`${techStr}${techIndex}`}>{techStr}</h4>
          ))}

          <div className="projectLinks">
            <a href={projectDict.repoLink} target='_blank' className='codeLink'>View Code</a>
            {projectDict.demoLink && <a href={projectDict.demoLink} target='_blank' className='siteLink'>Visit Site</a>}
            {/* Will show second icon if there is a demo link */}
          </div>

        </div>
      ))}
    </div>
  </>
)
};

export default ProjectsSection