import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>antsy1992@gmail.com</h5>
            <a href="mailto:antsy1992@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane />
            <h4>Telegram</h4>
            <h5>@fhgaha</h5>
            <a href="https://web.telegram.org/" target="@fhgaha">Send a message</a>
          </article>

          <article className="contact__option">
            <SlSocialVkontakte />
            <h4>VK</h4>
            <h5>id73770321</h5>
            <a href="https://vk.com/" target="id73770321">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact