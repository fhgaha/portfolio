import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/face.jpg";
import AVTR2 from "../../assets/AaF7I726N-8.jpg";
import AVTR3 from "../../assets/PRR_S2 — копия.jpg";
import AVTR4 from "../../assets/PRR_S2_6-8-6_ST_locomotive_Pennsylvania_Railroad_S2_steam_turbi_b5c6878b-5040-4e98-a504-e48b4067f5fc.png";

const data = [
  {
    avatar: AVTR1,
    name: 'Josh Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nemo, corporis voluptatum, facere ab blanditiis at sint fugiat voluptate pariatur ad provident earum dolores. Laborum eaque quae quis reiciendis magnam?'
  },
  {
    avatar: AVTR2,
    name: 'Josh Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nemo, corporis voluptatum, facere ab blanditiis at sint fugiat voluptate pariatur ad provident earum dolores. Laborum eaque quae quis reiciendis magnam?'
  },
  {
    avatar: AVTR3,
    name: 'Josh Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nemo, corporis voluptatum, facere ab blanditiis at sint fugiat voluptate pariatur ad provident earum dolores. Laborum eaque quae quis reiciendis magnam?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="client__name">Ernest Hemingway</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi libero quos, praesentium amet, earum rem optio quas doloribus minima at est repellendus laborum placeat velit reprehenderit sint sapiente ab impedit.
          </small>
        </article>


      </div>
    </section>
  )
}

export default Testimonials