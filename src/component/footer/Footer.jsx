import React from 'react'
import logo from '../../assets/ro__1.png';
import { FaRegEnvelope, FaCaretRight,FaFacebookF,FaLinkedin,FaYoutube } from 'react-icons/fa';
import {AiOutlinePhone} from 'react-icons/ai';
import {MdOutlineLocationOn} from 'react-icons/md';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__grid container grid'>
            <div className='footer__contact'>
                <a href='/' className='footer__logo'>
                    <img src={logo} alt='' className='footer__logo-img'/>
                <p className='footer__description'>
                Discover premium coffee experiences with Coffero, where every cup tells a story.
                </p>
                </a>
                <ul className='footer__contact'>
                    <li className='footer__contact-item'>
                        <AiOutlinePhone className='icon'/> 0963728321
                    </li>
                    <li className='footer__contact-item'>
                        <MdOutlineLocationOn className='icon'/> knk road 12/2 Street
                    </li><li className='footer__contact-item'>
                        <FaRegEnvelope className='icon'/> coffero@gmail.com
                    </li>
                </ul>
            </div>
            <div className='footer__content'>
                <h3 className='footer__title'>Quick Links</h3>
                <ul className='footer__links'>
                    <li>
                        <a href='#about' className='footer__link'>
                            <FaCaretRight className='icon'/>About Us
                        </a>
                    </li>
                    <li>
                        <a href='#menu' className='footer__link'>
                            <FaCaretRight className='icon'/>Menu
                        </a>
                    </li><li>
                        <a href='#features' className='footer__link'>
                            <FaCaretRight className='icon'/>Features
                        </a>
                    </li><li>
                        <a href='#gallery' className='footer__link'>
                            <FaCaretRight className='icon'/>Gallery
                        </a>
                    </li>
                    <li>
                        <a href='#reservation' className='footer__link'>
                            <FaCaretRight className='icon'/>Reservation
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer__content'>
                <h3 className='footer__title'>Opening Hour</h3>
                <div className='footer__opening-hours'>
                    <ul className='opening__hour-list'>
                        <li className='opening__hour-item'>
                            <span>Saturday:</span>
                            <span>09AM - 06PM</span>
                        </li>
                        <li className='opening__hour-item'>
                            <span>Monday:</span>
                            <span>09AM - 06PM</span>
                        </li>  <li className='opening__hour-item'>
                            <span>Tuesday:</span>
                            <span>09AM - 06PM</span>
                        </li>
                        <li className='opening__hour-item'>
                            <span>Wednesday:</span>
                            <span>09AM - 06PM</span>
                        </li>  <li className='opening__hour-item'>
                            <span>Thursday:</span>
                            <span>09AM - 06PM</span>
                        </li>  <li className='opening__hour-item'>
                            <span>Friday:</span>
                            <span>09AM - 06PM</span>
                        </li>
                        <li className='opening__hour-item'>
                            <span>Sunday:</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer__content'>
            <form action="" className="subscribe__form">
                <input type="text" placeholder='Your Email' className="form__input subscribe__input"/>
                <button className='btn btn--flex subscribe__btn'>
                    <FaRegEnvelope/> Subscribe Now
                </button>
                </form>
            
            <div className='footer__socials'>
                <h3 className='footer__social-follow'>Follow Us:</h3>
                <div className='footer__social-links'>
                    <a href='/' className='footer__social-link'>
                        <FaFacebookF/>
                    </a>
                    <a href='/' className='footer__social-link'>
                        <FaLinkedin/>
                    </a>   
                    <a href='/' className='footer__social-link'>
                        <FaYoutube/>
                    </a>
                    </div>   
                </div>
            </div>
        </div>
        <p className="copyright__text">
           &copy; Copyright 2024 <span>Coffero</span> All Rights Reserved.
        </p>

    </footer>
  )
}

export default Footer