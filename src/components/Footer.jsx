import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";

const Footer =()=>{
    return (
        <footer className="socials">
             <a href="" className="social-icons github"><FiGithub /></a>
            <a href="" className="social-icons twitter"><FaXTwitter/></a>
            <a href="" className="social-icons linkedin"><FaLinkedinIn/></a>
            <a href="" className="social-icons angelist"><FaAngellist /></a>
        </footer>
    )
}
export default Footer