import React from 'react'
import {Link} from "react-router-dom";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';


import "./Header.css";


function Header() {
    return (
        <div>
        <nav className="Header">
        <div className="image_header">
        
        <Link to="/">
            <img 
                className="header_logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0HqjTIwvpo8PoRFRIMydlQKaVO_AZZR9ukKtlYtnImfhZc4HsyFPsccXP5ti90Ewdt0&usqp=CAU" 
                alt="amazon"
             />
        </Link>
        </div>
        <div className="header_main">
        <div className="header_welcomeguest">
            <Link to="/" className="header_welcome">
                <span className="header_welcomeContainer">welcome Guest</span>
            </Link>
            
        </div>
        <div className="header_main">
            <Link to="/" className="header_login">
                <span className="header_loginContainer">Login</span>
            </Link>
            
        </div>
        <div className="header_main">
            <Link to="/" className="header_Contactus">
                <span className="header_contactusContainer">Contact-us</span>
            </Link>
            
        </div>
        <div className="header_main">
            <Link to="/" className="header_Resource">
                <span className="header_ResourceContainer">Resource-center</span>
            </Link>
            
        </div>
        
        <div className="header_search">
        <i className="fas fa-search"></i>
            <input type="text" className="header_searchInput" placeholder= "Search" />
            <ArrowDropDownCircleIcon className="header_icon"/>

           
        </div>

       
   </div>
        </nav>
       
        </div>
       
    )
}

export default Header
