// import React, {useEffect, useState} from 'react'
// import logo from "../../assets/ro.png";

// import {FaStream} from 'react-icons/fa';
// import './header.css';

// const Header = () => {
//   const [scrollHeader, setScrollHeader] = useState(false);

//   const changeHeader = () => {
//     if(window.scrollY >= 80){
//       setScrollHeader(true);
//     } else {
//       setScrollHeader(false);
//     }
//   };

//   useEffect(()=>{
//     window.addEventListener('scroll', changeHeader);
//   }, []);
//   return (
//     <header className={`${scrollHeader ? 'scroll-header' : ''}
//     header`}>
      
//     {/* <header className='header'> */}
//       <nav className='nav container'>
//         <a herf='/' className='nav__logo'>
//           <img src={logo} alt='' className='nav__logo-img'/>
//         </a>
        
//         <nav className="nav__list">
//         <a href="#" className="active"></a>
//         <a href="#home">Home</a>
//          <a href="#about">About</a>
//         <a href="#features">Features</a>
//         <a href="#menu">Menu</a>
//         <a href="#gallery">Gallery</a>
       
//         </nav>
//         <a href="#reservation" className="Reservation">Reservation</a>
    
//     <div className='nav__toggle'>
//       <FaStream/>
//     </div>
        

//   </nav>
//     </header>
//     // </header>
   
//   )
// }

// export default Header
import React, { useEffect, useState } from 'react';
import logo from "../../assets/ro.png";
import './header.css';

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);
    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt='Logo' className='nav__logo-img' />
        </a>

        <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
        <a href="#reservation" className="Reservation">Reservation</a>
        
        <div className='nav__toggle' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
