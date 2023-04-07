import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/AaF7I726N-8.jpg"
import lissImg from "../../assets/lissajous.png"
import tetrisImg from "../../assets/tetris.png"
import trainsImg from "../../assets/trains.png"
import chessImg from "../../assets/chess.png"

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: lissImg,
      title: 'Lissajous curves demonstration. Made in React JS.',
      github: 'https://github.com/fhgaha/lissajous',
      demo: 'https://lissajous.onrender.com/'
    },
    
    {
      id: 2,
      image: tetrisImg,
      title: 'Retro tetris game. Made in React TS.',
      github: 'https://github.com/fhgaha/tetris',
      demo: 'https://retro-tetris.onrender.com/'
    },
    {
      id: 3,
      image: trainsImg,
      title: 'Small train tech demo. Made in Godot Mono, Dijkstra and Dubins paths are used.',
      github: 'https://github.com/fhgaha/Trains',
      demo: 'https://fgaha56.itch.io/trains-tech-demo'
    },
    {
      id: 4,
      image: chessImg,
      title: 'Chess game where you can play against whoever visiting this website at the time. Made in ASP.NET.',
      github: 'https://github.com/fhgaha/ChessWebApp',
      demo: 'https://chesswebapp.up.railway.app/'
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