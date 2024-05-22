import { SocialIcon } from 'react-social-icons';
function IntroSection(){
    return (
        <div className='introSingle'>
            <h3>Phone: 603-552-8937</h3>
            <h3>Email: sammyadams04@gmail.com</h3>
            <SocialIcon url='https://www.linkedin.com/in/sam-adams-87a158269/' target='_blank'/>
            <SocialIcon url='https://github.com/SamAdams1?tab=repositories' target='_blank'/>
            <br />
            <h2>Summary</h2>
            <h3>A Software Engineer passionate about app and web development, committed to delivering innovative solutions. I am recognized for my resourcefulness and unwavering curiosity when tackling complex challenges. Eager to contribute my skills and drive to a dynamic team.</h3>
            <br />
            <h2>Technical Skills</h2>
            <h3>Python, GDScript, Godot Engine, Git, GitHub, JavaScript, HTML, CSS</h3>
        </div>
    )
}
export default IntroSection