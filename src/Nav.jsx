import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = () =>{
    return(
<nav className="navbar navbar-expand-sm navi mb-4" >
<span style={{color:"white",marginLeft:"40px"}}>My Website</span>
<ul className="navbar-nav ml-auto">
  <li className="nav-item mr-5 ">
    <NavLink exact activeClassName="jai" className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item  mr-5">
    <NavLink exact activeClassName="jai" className="nav-link"  to="/gallery">Gallery</NavLink>
  </li>
  <li className="nav-item  mr-5">
    <NavLink exact activeClassName="jai" className="nav-link"  to="/about">About</NavLink>
  </li>
  <li className="nav-item  mr-5">
    <NavLink exact activeClassName="jai" className="nav-link"  to="/contact">Contact</NavLink>
  </li>  
</ul>

</nav>
    );
}

export default Nav;