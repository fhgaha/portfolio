import React from 'react'
import './about.css'
import ME from '../../assets/chrome_Ja3uY9XbKh — копия.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0 Years!</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>Got some</small>
            </article>
          </div>

          <p>{"<--"} This is not my photo. But you can hover on it!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <br /><br /><br /><br />
        </div>
      </div>
    </section>
  )
}

export default About