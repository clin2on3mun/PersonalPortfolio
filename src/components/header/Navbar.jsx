import { useRef } from "react";
import { FaBarsStaggered, FaXmark} from "react-icons/fa6";
import './navbar.css';
import { Link } from "react-scroll";
const Navbar = ()=>{
    const links=[
        {name : "Home",link: "home"},
        {name : "About",link: "about"},
        {name : "Project",link: "project"},
        {name : "Contact",link: "contact"}
    ]
    const menuRef = useRef(null)
    const showMenuBar= ()=>{
            menuRef.current.classList.toggle('responsive-menu')
    }
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
    return(
        <header>
            <nav className="nav-menu">
                <a href="#home"><h1>Munana Clinton</h1></a>
                <ul className="nav-links" ref={menuRef}>
                    <button onClick={showMenuBar} className="nav-btn close"><FaXmark/></button>
                    
                        {links.map((link, index)=>(
                        <li key={index}>
                         <Link 
                            to={link.link}
                            spy
                            offset={-140}
                            onClick={showMenuBar}                       
                         >{link.name}</Link>
                         </li>
                        ))}
                    
                </ul>
                <button onClick={showMenuBar} className="nav-btn hamburg-menu"><FaBarsStaggered/></button>
            </nav>
           
        </header>
    )
}
export default Navbar