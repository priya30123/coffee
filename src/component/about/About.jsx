import React from 'react';
import aboutImg from "../../assets/about-tht.jpg";
import './about.css';

const About = () => {
  return (
  
    <section className='about section' id='about'>
        <div className='about__grid container grid'>
            <div className='about__img-wrapper'>
                <img src={aboutImg} alt='' className='about__img'/>
            </div>
           
            <div className='about__content'>
                <h2 className='section__title title-left' 
                data-title='About Us'>
                    Fresh Quality And Orgainc Tasty Coffee House For You
                </h2>
                
                <p className='about__description'>
                At Coffero, we believe in the art of coffee crafting, offering a unique blend of tradition and innovation in every cup. Our mission is to create a welcoming space where coffee enthusiasts can savor expertly brewed beverages and freshly baked pastries. Join us at Coffero, where every visit is a celebration of rich flavors and warm community.
                </p>
                <div className='about__details grid'></div>
                <a href="#gallery" className='btn'>Gallery</a>
                    <p className='about__details-description'></p>
                    {/* <a href='#team' className='btn'>
                        Our Experts
                    </a> */}
                    
                </div>
            </div>
        
    </section>
  );
};

export default About;