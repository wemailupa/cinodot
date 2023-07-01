import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from 'react';
import "../Styles/main.css";

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


  return (
    <header>
        <h2>LOGO</h2>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/CsPosts">Map Sections</a>
            <a href="/CaPosts">Applications</a>
            <a href="/CePosts">Computer Engineering</a>
            <a href="/TcPosts">Theoretical Computer Science</a>
            <a href="http://www.pabloogle.com">Portfolio</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>

            </nav>

            <button className="nav-btn" onClick={showNavbar}> 
                <FaBars/>
            </button>

        
    </header>
    
  );
}

export default Navbar








