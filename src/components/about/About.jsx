import { LiaCloudDownloadAltSolid } from "react-icons/lia"
import { motion } from "framer-motion"
import Button from "../Button"
import List from "../List"
import { FaHtml5, FaCss3, FaGitAlt, FaGithub, FaReact, FaDev } from "react-icons/fa6";
import { SiWebpack, SiJavascript, SiRuby, SiRubyonrails } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import './about.css'
const About = ()=>{
   return( 
   <section id="about"
                   >
      <motion.div className="about-content"
                  initial={{opacity: 0, y:-100}}
                  whileInView={{opacity:1, y:0}}
                  transition={{duration:1}}>
        <h2 className="about-text">About</h2>
        <div className="about-me">
          <p style={{lineHeight:"1.8"}}>Hello! I&apos;m Munana, a passionate Full-stack Developer dedicated to creating exceptional digital experiences. With a strong foundation in technologies like JavaScript, React, Ruby on Rails, and more, I thrive on turning ideas into functional and user-friendly applications.</p>
          <p style={{lineHeight:"1.8", paddingTop:"10px"}}> My journey in web development has equipped me with problem-solving skills, attention to detail, and a keen eye for design. I am constantly learning and adapting to stay at the forefront of technology, ensuring that my work is both innovative and impactful.</p>
          <p style={{lineHeight:"1.8", paddingTop:"10px"}}>In my freetime i enjoy watching football games and hanging out with my friends aand family</p>
          <p style={{lineHeight:"1.8", paddingTop:"10px"}}> If you like what you see, and you have a project that needs coding, don&apos;t hesitate to reach out! Let&apos;s create something remarkable together. Connect with me on through my socials or drop me an email at <span style={{color:"var(--secondary-color)", fontWeight:"700"}}>munanaclinton@gmail.com.</span></p>
        </div>
        <Button link="https://drive.google.com/file/d/1dhHfReb7SkNQ0d6ZGJVl79PTLaHIGBVV/view?usp=sharing"  classes="resume">
          <div className="resume-content">
            <LiaCloudDownloadAltSolid className="icon-download"/>
            <span className="resume-button-name">Resume</span>
          </div>
        </Button>   
        </motion.div>
        <motion.section id="skills"
                        initial={{opacity: 0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
           <section>
             <p className="skill-header">Language</p>
             <ul className="skills">
              <List className="list-skill" style={{background:'#FF5B22', color:'white'}}> 
                <span className="size"><FaHtml5 /></span>   
                <p className="skill-name">HTML</p>
              </List>
              <List className="list-skill" style={{background:'#39A7FF', color:'#fff'}}>
                <span className="size"><FaCss3/></span>
                <p className="skill-name">CSS</p>
              </List>
              <List className="list-skill" style={{background:'#f7df1e', color:'#fff'}}>
                <span> <SiJavascript  className="size" style = {{color:'#F8DE22', background:'#000'}}/></span>
                <p className="skill-name">Javascript</p>
              </List>
              <List className="list-skill" style={{background:'#820127', color:'#fff'}}>
                <span className="size"><SiRuby/></span>
                <p className="skill-name">Ruby</p>
              </List>
              </ul>
            </section> 
           <section>
             <p className="skill-header">FrameWork</p>
            <ul className="skills">
            <List className="list-skill" style={{background:'#89CFF3', color:'#fff'}}>
              <span className="size"><FaReact/></span>
              <p className="skill-name">React</p>
              </List>
            <List className="list-skill" style={{background:'#B31312', color:'#fff'}}>
             <span className="size"><SiRubyonrails /></span>
              <p className="skill-name">Rails</p>
              </List>
            </ul>
           </section>
            <section>
              <p className="skill-header">Tools</p>
              <ul className="skills">
              <List className="list-skill" style = {{background:'#00A9FF', color:'#fff'}}>
              <span className="size"><SiWebpack /></span>
              <p className="skill-name">Webpack</p>
            </List>
              <List className="list-skill" style={{background:'#FF6C22', color:'#fff'}}>
                  <span className="size"><FaGitAlt/></span>
                  <p className="skill-name">Git</p>
              </List>
              <List className="list-skill" style={{background:'#000', color:'#fff'}}>
                  <span className="size"><FaGithub /></span>
                  <p className="skill-name">Github</p>
              </List>
              <List className="list-skill" style={{background:'#13005A', color:'#fff'}}>
                  <span className="size"><BiLogoPostgresql/></span>
                  <p className="skill-name">PostgreSQL</p>
              </List>
              <List className="list-skill" style={{background:'#2F58CD', color:'#fff'}}>
                  <span className="size"><FaDev/></span>
                  <p className="skill-name">DevTools</p>
              </List>
              </ul>
             
            </section>
  
        </motion.section>    
    </section>
   )
}
export default About