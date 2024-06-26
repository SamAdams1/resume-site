import { SocialIcon } from 'react-social-icons';
function IntroSection(){
    return (
        <div className='introSect'>
            {/* <h3>Phone: 603-552-8937</h3>
            <h3>Email: sammyadams04@gmail.com</h3> */}
            <h1 id='myName'>Sam Adams</h1>
            <h3>A Software Engineer passionate about app and web development, committed to delivering innovative solutions. I am recognized for my resourcefulness and unwavering curiosity when tackling complex challenges. Eager to contribute my skills and drive to a dynamic team.</h3>
            <SocialIcon className='socialIcons' url='https://www.linkedin.com/in/sam-adams-87a158269/' target='_blank'/>
            <SocialIcon className='socialIcons' url='https://github.com/SamAdams1?tab=repositories' target='_blank'/>
        </div>
    )
}
export default IntroSection