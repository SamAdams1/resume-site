import { SocialIcon } from "react-social-icons";
import info from "./info.json";

function ProjectsSection() {
  return (
    <>
      {/* <button>DarkMode</button> */}
      <h1 id="projects" className="projectsTitle">
        Projects
      </h1>
      <div className="projectsSect">
        {info.projects.map((projectDict, arrIndex) => (
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
