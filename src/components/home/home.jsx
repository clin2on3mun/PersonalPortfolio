import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import './home.css'
import Myimage from "./landingImage";
const Home = ()=>{
    return(
        <section id="home">
            <div className="hero">
                <h1 className='hero-text'>Hello, I&apos;m Munana 👋.</h1>
                <p className="hero-text-me">I&apos;m a Full-Stack Developer</p>
                <p className="hero-about">Crafting seamless user experiences. Passionate about open-source contributions and dedicated to the art of UI/UX. Let &apos;s build something amazing together!</p>
                <div className="socials">
                  <a href="https://github.com/clin2on3mun" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
                  <a href="https://www.linkedin.com/in/munana-clinton/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
                  <a href="https://wellfound.com/u/munana-clinton" target="_blank" className="social-icons angelist" rel="noreferrer"><FaAngellist /></a>
                </div>
            </div>
            <div className="image-home-page">
                <Myimage/>
            </div>
        </section>
    )
}
export default Home