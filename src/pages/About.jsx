import React from "react";
import Title from "../components/Title";
import "../style/pages/About.css";
import profile_photo from "../images/portfolio.png";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        <main className="about-content">
          <section className="about-text">
            <Title heading="About Me" />
            <div className="about-me-text">
              <p>
                I'm a frontend developer giving the firsts steps in the dev
                world. Let me start from the beginning. I have bachelor's degree
                in business administration and worked with international
                logistics. In my former job I used to interact with people and
                solve problems, respond quickly to changes and make big
                decisions promptly, so resilience and teamwork are my main
                strengths. Although working with logistics was good I'd still
                missed something for my carreer, I love technology and and being
                a software developer was always a dream that I've ignored for a
                while. So looking forward to be motivated and fulfilled I
                decided to start again and become a Web Developer. Currently I'm
                studying Web Development at Trybe and soon be able to my first
                opportunities.
              </p>
              <div className="skills">
                <h2>Technologies I've been working with:</h2>
                <ul className="techs-list">
                  <li>HTML / CSS</li>
                  <li>JavaScript (ES6+) / Java.</li>
                  <li>Git</li>
                  <li>Linux (Development and User Environment)</li>
                  <li>React / Redux / RTL</li>
                  <li>Bootstrap</li>
                </ul>
                <p>
                  Right now I'm exclusively dedicated to finish my Full Stack
                  Web Development course at Trybe and really excited to get my
                  first job position soon.
                </p>
              </div>
              <div className="link">
                <a className="projects-link" href="/work">
                  Check out my projects!
                </a>
              </div>
            </div>
          </section>
          <section className="my-photo">
            <div className="photo-border">
              <img src={profile_photo} alt="my-profile-pic" />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default About;
