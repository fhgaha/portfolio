import React from 'react'
import './footer.css'
import { IoLogoChrome } from "react-icons/io";

const Footer = () => {
  return (
	<footer>
    <a href="#" className='footer__logo'>MY LOGO</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href=""><IoLogoChrome/></a>
      <a href=""><IoLogoChrome/></a>
      <a href=""><IoLogoChrome/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Anton Simkin's Portfolio. All rights reserved.</small>
    </div>
  </footer>
  )
}

export default Footer