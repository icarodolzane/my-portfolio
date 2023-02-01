import React from 'react';
import Title from './Title';
import '../style/components/About.css'
import profile_photo from '../images/portfolio.png';

class About extends React.Component {
  render() {
    return (
    <section className='about-content'>
      <section className="about-text">
        <Title heading="About Me" />
        <div className='about-me-text'>
          <p>
            I'm a frontend developer giving the firsts steps in the dev world. Let me start from the beginning. I have bachelor's degree in business administration and used to work with international logistics, but then I realized that I was not happy and reliant in my future perspectives... My former job was extremely stressful and I became mentally and physically ill. Looking forward to be motivated and happy again I decided to start again to become a Full Stack Developer.
          </p>
          <div className='skills'>
            <h2>Technologies I've been working with since then:</h2>
            <ul className='techs-list'>
              <li>HTML / CSS</li>
              <li>JavaScript (ES6+) / Java.</li>
              <li>Git</li>
              <li>Linux (Development and User Environment)</li>
              <li>React / Redux / RTL</li>
              <li>Bootstrap</li>
            </ul>
            <p>
                Right now I'm exclusively dedicated to finish my Full Stack Web Development course at Trybe and really excited to get my first job position soon.
            </p>
          </div>
          <div className="link">
            <a className="projects-link" href="/work">
              Check out my projects!
            </a>
          </div>
        </div>
      </section>
      <section className='my-photo'>
        <div className='photo-border'>
          <img src={profile_photo} alt="my-profile-pic" />
        </div>        
      </section>
    </section>);
  }
}

export default About;
