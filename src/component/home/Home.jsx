import React from 'react'
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <div className='home__content'>
          <span className='home__subtitle'>Welcome To Coffero!</span>
          <h1 className= 'home__title'>Discover Amazing Coffee House & Get Energy</h1>
          {/* <div data-aos="fade-up" data-aos-delay="400"> */}
          <p className='home__description'>
          Experience the warmth of Coffero, your go-to spot for premium coffee and delightful treats. Discover a cozy atmosphere, and delectable coffe, pastries to elevate your day.
          </p>
          <div className="home__btns">
            <a href='#menu' className='btn'>
              Check Menu
           </a>
           <a href='#reservation' className='btn'>
              Book Table
              </a>
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home