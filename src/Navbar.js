import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css";
function Navbar() {
    return (
        
        
        <nav className="navbar">
        <div classNmae="nav_container">
        <ul className="nav_menu">
            <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                        Home
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/Overview" className="nav-link">
                       overview
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/Who" className="nav-link">
                      Who we are
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/What" className="nav-link">
                     What we do
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/how" className="nav-link">
                    How we do it
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/why" className="nav-link">
                    Why WhyDigitasLBi
                    </NavLink>
             </li>
             <li className="nav-item">
                    <NavLink exact to="/global" className="nav-link">
                    Global reach
                    </NavLink>
             </li>
          
        </ul>
           
            </div>
        </nav>
     
        
            
        
    )
}

export default Navbar
