import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/AaF7I726N-8.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'This is a portfolio item title',
      github: 'https://github.com/fhgaha',
      demo: 'https://google.com'
    },
    {
      id: 2,
      image: IMG1,
      title: 'This is a portfolio item title',
      github: 'https://github.com/fhgaha',
      demo: 'https://google.com'
    },
    {
      id: 3,
      image: IMG1,
      title: 'This is a portfolio item title',
      github: 'https://github.com/fhgaha',
      demo: 'https://google.com'
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Potfolio</h1>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="_image" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section >
  )
}

export default Portfolio