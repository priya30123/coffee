import React, {useEffect, useState} from 'react'
import logo from "../../assets/ro.png";

import {FaStream} from 'react-icons/fa';
import './header.css';

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

  const changeHeader = () => {
    if(window.scrollY >= 80){
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', changeHeader);
  }, []);
  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''}
    header`}>
      
    {/* <header className='header'> */}
      <nav className='nav container'>
        <a herf='/' className='nav__logo'>
          <img src={logo} alt='' className='nav__logo-img'/>
        </a>
        
        <nav className="nav__list">
        <a href="#" className="active"></a>
        <a href="#home">Home</a>
         <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
       
        </nav>
        <a href="#reservation" className="Reservation">Reservation</a>
    
    <div className='nav__toggle'>
      <FaStream/>
    </div>
        

  </nav>
    </header>
    // </header>
   
  )
}

export default Header
 
