import React from "react";

class HelloMe extends React.Component {
  render() {
    return (
      <main className="main-content">
        <section className="hello-me">
          <p>Hi, my name is</p>
          <h1>Icaro Dolzane.</h1>
          <h1>I develop stuff for the web.</h1>
          <div className="paragraph">
            <p>
              I usually say this to my parents and relatives when they ask me
              about my job...
            </p>
            <p>
              I'm web developer in the beggining of my career. Currently, I'm
              focused in finishing my web development course at{" "}
              <a
                target="_blank"
                href="https://www.betrybe.com/"
                rel="noreferrer"
              >
                Trybe
              </a>{" "}
              and soon getting the opportunity of my first job in the area.
            </p>
          </div>
          <div className="link">
            <a className="projects-link" href="/work">
              Check out my projects!
            </a>
          </div>
        </section>
      </main>
    );
  }
}

export default HelloMe;
