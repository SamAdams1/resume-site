import { SocialIcon } from "react-social-icons";
import info from "./info.json";

function IntroSection() {
  return (
    <div className="introSect">
      {/* <h3>Phone: 603-552-8937</h3>
            <h3>Email: sammyadams04@gmail.com</h3> */}
      <h1 id="myName">{info.intro.name}</h1>
      <h3>{info.intro.tagline}</h3>
      {info.intro.social.map((socialLink, index) => (
        <SocialIcon
          key={index}
          className="socialIcons"
          url={socialLink.url}
          target="_blank"
        />
      ))}
    </div>
  );
}
export default IntroSection;
