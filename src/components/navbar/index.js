import React  from 'react';
import {NavLink} from 'react-router-dom';

import './style.css'

/**
* @author
* @function NavBar
**/

const NavBar = (props) => {




  return(
    <div className="navbarhead">
        <ul className="navul">
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/aboutus"> Aboutus </NavLink></li>
            <li><NavLink to="contractus"> ContractUs </NavLink></li>
            <li><NavLink to="/post"> Post </NavLink></li>
        
        
        </ul>
        <div className="search">
            <form >
            <input />
             <img className="searchsr" src={require('../../assets/icone/search.png')} alt="search"/>
             </form>
        </div>


    </div>
   )

 }

export default NavBar