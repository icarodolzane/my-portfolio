import React from "react";

class HelloMe extends React.Component {
  render() {
    return (
      <section className="hello-me">
        <p className="paragraph">Hi, my name is</p>
        <h1>Icaro Dolzane.</h1>
        <h1>I develop stuff for the web.</h1>
        <p className="paragraph">
          I used to say this to my parents and relatives when they ask me about
          my job...
        </p>
        <p className="paragraph">
          I'm web developer in the beggining of my carrer. Currently, I'm
          focused in finishing my web development course at{" "}
          <a target="_blank" href="https://www.betrybe.com/" rel="noreferrer">Trybe</a> and soon to get the
          opportunity of my first job in the area.
        </p>
        <div className="link">
          <a className="projects-link" href="/work">Check out my projects!</a>
        </div>
      </section>
    );
  }
}

export default HelloMe;
