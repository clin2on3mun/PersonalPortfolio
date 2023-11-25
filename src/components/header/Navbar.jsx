import React, { useRef } from "react";
import { FaBarsStaggered, FaXmark} from "react-icons/fa6";
import './header.css';
const Navbar = ()=>{
    const menuRef = useRef(null)
    const showMenuBar= ()=>{
            menuRef.current.classList.toggle('responsive-menu')
    }
    return(
        <header>
            <nav className="nav-menu">
                <h1> Logo </h1>
                <ul className="nav-links" ref={menuRef}>
                <button onClick={showMenuBar} className="nav-btn close"><FaXmark/></button>
                 <li><a href="#Home" onClick={showMenuBar}>Home</a></li>
                 <li><a href="#About" onClick={showMenuBar}>About</a></li>
                 <li><a href="#projects"onClick={showMenuBar}>Projects</a></li>
                 <li><a href="#skills" onClick={showMenuBar}>Skills</a></li>
                 <li><a href="#contact" onClick={showMenuBar} >Contact</a></li>
                </ul>
                <button onClick={showMenuBar} className="nav-btn hamburg-menu"><FaBarsStaggered/></button>
            </nav>
           
        </header>
    )
}
export default Navbar