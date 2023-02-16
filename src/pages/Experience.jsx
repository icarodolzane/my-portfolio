import React, { Component } from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import Title from '../components/Title';
import '../style/pages/Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        <main className="experience-content">
          <Title heading="Where I've Worked" />
          <div className="experience-text">
            <p>
            Considering I'm transitioning from Logistics, my only professional experiences are from logistics. But I can describe about the soft skills that I've learned during my 4 years in International Logistics.
            One of my formers job was in a Taiwanese Electronic Manufacturer, as import assistant my duty was garantee the imported goods arriving in time for production. I used work under pressure every day so emotional intelligence was a must, communication and good interpersonal relationship also.Basically I used work solving problems and dealing with people to prevent and avoid all kind of issues and I believe it is possible combine this is skills to work daily in a software development environment.
            </p>
          </div>
          <ul className="jobs-list">
            <li>Air Operations Analyst - International Logistics </li>
            <li>Import Assistant - International Logistics </li>
            <li>Intern - International Logistics </li>
          </ul>

        </main>

      </>
    )
  }
}
