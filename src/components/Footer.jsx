import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";

const Footer =()=>{
    return (
        <footer className="socials" style={{position:"relative"}}>
                <a href="https://github.com/clin2on3mun" target="_blank" className="social-icons github" rel="noreferrer"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/munana-clinton/" target="_blank" className="social-icons linkedin" rel="noreferrer"><FaLinkedinIn/></a>
                <a href="https://wellfound.com/u/munana-clinton" target="_blank" className="social-icons angelist" rel="noreferrer"><FaAngellist /></a>
                <a style={{position:"absolute", top: "20%", left:"70%", fontSize:"1.25em"}} className="back" href="#home">back to top</a>
        </footer>
    )
}
export default Footer