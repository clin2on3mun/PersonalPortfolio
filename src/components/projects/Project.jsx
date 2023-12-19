import projects from '../data'
import { FaRegEye, FaCode  } from "react-icons/fa";
import { motion } from "framer-motion"
import Button from '../Button';
import './project.css'

const Project= ()=>{
    console.log(projects)
    return (
        <section id="projects"
                        >
            <h2 className='about-text'>Projects</h2>
            <article className="projects">
                {projects.map((project)=>(
                    <motion.div key={project.id} className="project"
                                            initial={{opacity: 0, x: -100}}
                                            whileInView={{opacity:1, x: 0}}
                                            transition={{duration:1}}>
                     <figure className='img-project'>   
                      <img src={project.imgSource} alt={project.title}/>
                     </figure> 
                     <div className="project-content">
                      <h5>{project.title}</h5>   
                      <p>{project.description}</p> 
                      <ul className='tech-list'> 
                      {project.listOftech.map((tech,index)=>(
                            <li key={index} className="project-tech">{tech}</li>
                      ))} 
                      </ul>
                      <div className="project-buttons">
                      <Button link={project.liveDemo} classes="project-button">
                            <FaRegEye/>
                            <span>Live Demo</span>
                      </Button>
                      <Button link={project.sourceCode}  classes="project-button">
                            <FaCode/>
                            <span>Source Code</span>
                      </Button>
                      </div>
                     </div> 
                     </motion.div>
                ))}
                </article>
        </section>
    )
}
export default Project