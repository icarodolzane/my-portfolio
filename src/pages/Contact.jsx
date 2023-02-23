import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import '../style/pages/Contact.css'
import whatsapp from '../images/icon-whatsapp.png'
import discord from '../images/icon-discord.png'
import gmail from '../images/icon-gmail.png'
export default function Contact() {
  return (
    <>
      <Header/>
      <LeftSideBar />
      <RightSideBar />
      <div className="contact-main-container">
        <h3>
          Did you like it? 
        </h3>
        <h1>
          Let's talk. 
        </h1>
        <p>
          If you want to know more or even appoint an interview feel free to get in touch. 
        </p>

        <div className="whatsapp-link">
          <a
            href="https://tinyurl.com/icaro-wpp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="whatsapp-icon" />
          </a>
          <a 
            href="https://discord.gg/AcPu5sEt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} alt="discord-icon" />
          </a>
          <a
            href="mailto:https://is.gd/KEODaN"
            target="_blank"
            rel="noreferrer"  
          >
          <img src={gmail} alt="gmail-icon" />
          </a>
        </div>
      </div>
    </>
  )
}
