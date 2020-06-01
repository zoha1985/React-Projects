import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="navehed">
            <a href="#">Home</a>
            <a href="#">Aboutus</a>
            <a href="#">Contracrus</a>
            <a href="#">Display</a>

        </nav>
        <div>
            socialmedia links
        </div>
    </header>
   )

 }

export default Header