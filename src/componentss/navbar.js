

import React from 'react';
import Brands from "./brands"
import Cards from "./cards"
import Prefer from "./prefer"
import Location from './location';

import Last from './last';

import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='container'>
    <div className="navbar">
      <div className="logo">
        <img src="a.jpg" alt="Logo" />
        <h6>STOCK REGISTER</h6>
      </div>
      <ul className="nav-links">
        <li><Link to="#">Home</Link></li>
        <li><Link to="/Shop">Shop</Link></li>

        <li><a href="#SERVICES">Services</a></li>
        <li><a href="#ABOUT">Locations</a></li>
        <li><a href="#ABOUT">Contact</a></li>
      </ul>
      
    </div>
    
    <div className='row' style={{backgroundColor:"whitesmoke",borderRadius:"5rem",marginTop:"2rem"}}>
      <div className='col-md-6' style={{marginTop:"10rem"}}>
        
        <h5  style={{fontSize:"4rem",color:"#6dabb3"}}><b>NEEDED STOCKS??</b></h5>
        <h5  style={{fontSize:"4rem",color:"#6dabb3"}}><b>NO WORRIES!!</b></h5>
        <h5  style={{fontSize:"4rem",color:"#6dabb3"}}><b>WE WILL FIX IT :)</b></h5>


      </div>
      <div className='col-md-6'>
        <img src='stock.png' style={{borderRadius:"4rem", height:"500px",}}  alt=''/>
      </div>
    </div>
     <Prefer/>
   
    <Cards/>
    {/* <Form/> */}
    <Brands/> 
    <Location/>
    
    <Last/>
    </div>
  );
}

export default Navbar;