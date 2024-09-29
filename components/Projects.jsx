import { SocialIcon } from "react-social-icons";

const projectsDetailsArr = [
  {
    title: "Historical Battle Wiki",
    desc: "A map that displays important historical battles on a world map, allows history nerds to talk to eachother, and provides a wiki to add new battles to the database. A passion project that combines my love of history and coding.",
    tech: "JavaScript, React, Expressjs, Nodejs, MongoDB, Python, TailwindCSS, JWT, Bcrypt, Google Cloud Run, Vercel, Websockets",
    repoLink: "https://github.com/SamAdams1/battles-map",
    demoLink: "https://samadams1.github.io/battles-map/",
  },
  {
    title: "Austrian Castle Locator",
    desc: `A website that displays all the castles in Austria. Similar to the Battle Wiki but uses a totally different tech stack as I was curious about the technologies.`,
    tech: "TypeScript, Angular, Java, Spring Boot, PostgreSQL, Vercel, Docker, AWS",

    repoLink: "http://github.com/SamAdams1/castle-finder",
    demoLink: "https://castle-finder.vercel.app/",
  },
  {
    title: "Cosmic Campaign",
    desc: "A fast-paced top-down space shooter rougelike game. Learned how to plan a large project, learn new technology quickly, brainstorm ideas, navigate documentation, and fix bugs.",
    tech: "GDScript, Godot Engine, Git, GitHub",
    repoLink: "https://github.com/SamAdams1/Cosmic-Campaign",
    demoLink: "https://sams-studio.itch.io/cosmic-campaign",
  },

  // {
  // title: "AudioBookify",
  // desc: `Upload a PDF or .txt file and it will be automatically read and turned into an audiobook!
  // This audiobook can then be downloaded to be listened to later offline.
  // Change the speed of you narrator. Easily fastforward or rewind your audiobook.`,
  // tech: ["MongoDB, Ayfie Api, ExpressJS, Google-Text-To-Speech"],

  // repoLink: "https://github.com/AndrewJhD/Course2Group16-sProject",
  // },
];

function ProjectsSection() {
  return (
    <>
      {/* <button>DarkMode</button> */}
      <h1 id="projects" className="projectsTitle">
        Projects
      </h1>
      <div className="projectsSect">
        {projectsDetailsArr.map((projectDict, arrIndex) => (
          <div className="singleProject">
            <h2 key={projectDict.title} className="projectTitle">
              {projectDict.title}
            </h2>

            <h3 className="projectDesc">{projectDict.desc}</h3>

            {projectDict.tech.split(", ").map((techStr, techIndex) => (
              <h4 className="projectTech" key={`${techStr}${techIndex}`}>
                {techStr}
              </h4>
            ))}

            <div className="projectLinks">
              <a
                href={projectDict.repoLink}
                target="_blank"
                className="codeLink"
              >
                View Code
              </a>
              {projectDict.demoLink && (
                <a
                  href={projectDict.demoLink}
                  target="_blank"
                  className="siteLink"
                >
                  Visit Site
                </a>
              )}
              {/* Will show second icon if there is a demo link */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectsSection;
