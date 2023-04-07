import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/17620510_795128303976571_3641540145363649442_o — копия (2).png";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anton Simkin</h1>
        <h5 className="text-light">Programming Enthusiast</h5>
        <CTA />
        <HeaderSocials />

        {/* my photo */}
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header