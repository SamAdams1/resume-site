import { SocialIcon } from 'react-social-icons';

const projectsDetailsArr = [
    {
        title: "Cosmic Campaign",
        desc: [
            "A fast-paced top-down space shooter rougelike game, defeat an endless onslaught of enemies to upgrade your ship and take on stronger foes!",
            "Sole Contributor",
            "GDScript, Godot Engine, LibreSprite, AudioMass, GitHub",
        ],
        repoLink: "https://github.com/SamAdams1/Cosmic-Campaign",
        demoLink: "https://sams-studio.itch.io/cosmic-campaign",
    },
    {
        title: "Historical Battle Map",
        desc: [
            "A map that displays important historical battles on a world map. Battles are sorted by modern country borders. Click on the red dot to get info on the battle. All location data and summaries sourced from wikipedia.",
            "Sole Contributor",
            'Leaflet Api, Wikipedia Api, JavaScript, HTML, CSS',
        ],
        repoLink: "https://github.com/SamAdams1/battles-map",
        demoLink: "https://samadams1.github.io/battles-map/",
    },
    {
        title: "AudioBookify",
        desc: [
            `Upload a PDF or .txt file and it will be automatically read and turned into an audiobook!
            This audiobook can then be downloaded to be listened to later offline.
            Change the speed of you narrator. Easily fastforward or rewind your audiobook.`,
            "Team Project",
            "Front-End Developer",
            "MongoDB, Ayfie Api, ExpressJS, Google-Text-To-Speech",
        ],
        repoLink: "https://github.com/AndrewJhD/Course2Group16-sProject",
    },
]

function ProjectsSection() {
    return(
        <div className='projectsSect'>
            <button>DarkMode</button>
            <h1>Projects</h1>
            {projectsDetailsArr.map((projectDict) => (
                <div className='singleProject'>
                    <h2>{projectDict.title}</h2>
                    <SocialIcon url={projectDict.repoLink} target='_blank'/>
                    {/* Will show second icon if there is a demo link */}
                    {projectDict.demoLink && <SocialIcon url={projectDict.demoLink} target='_blank'/>}
                    
                    {projectDict.desc.map((descStr) => (
                        <h3>{descStr}</h3>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default ProjectsSection