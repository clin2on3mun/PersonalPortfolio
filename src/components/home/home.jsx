import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { motion } from 'framer-motion'
import './home.css'
import Myimage from "./landingImage";
const Home = ()=>{
    return(
        <section id="home">
            <motion.div className="hero"
                        initial={{opacity: 0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
                <h1 className='hero-text'>Hello, I&apos;m Munana 👋.</h1>
                <p className="hero-text-me">I&apos;m a Full-Stack Developer</p>
                <p className="hero-about">Crafting seamless user experiences. Passionate about open-source contributions and dedicated to the art of UI/UX. Let &apos;s build something amazing together!</p>
                <div className="socials">
                  <a href="https://github.com/clin2on3mun" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
                  <a href="https://www.linkedin.com/in/munana-clinton/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
                  <a href="https://wellfound.com/u/munana-clinton" target="_blank" className="social-icons angelist" rel="noreferrer"><FaAngellist /></a>
                </div>
            </motion.div>
            <motion.div className="image-home-page"
                        initial={{opacity: 0, y:-100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
                <Myimage/>
            </motion.div>
        </section>
    )
}
export default Home