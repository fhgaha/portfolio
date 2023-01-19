import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/AaF7I726N-8.jpg";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Potfolio</h1>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

                <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

                <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

                <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

                <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/fhgaha" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio