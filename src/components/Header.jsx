import React from "react";
import "../style/components/Header.css";
import myLogo from "../images/icaro-logo.png";
import 'animate.css';
// import myLogoHover from "../images/logo-hover.png";

class Header extends React.Component {
  render() {

    const headerResponsive = (
      <nav className="my-nav-responsive">
          <menu className="menu">
            <button className="menubtn">
              <div className="dash" />
              <div className="dash" />
              <div className="dash" />
              <i class="fa fa-caret-down"></i>
            </button>
            <nav className="menu-content">
                <a href="/about"> About </a>
                <a href="/experience">Experience</a>
                <a href="/work">Work</a>
                <a href="/contact">Contact</a>
                <a href="/contact">Resume</a>
            </nav>
          </menu>
      </nav>
    );
    return (
      <div>
        <header className="header">
          <a className="logo" href="/">
            <img className="my-logo" src={myLogo} alt="my-logo" />
          </a>
          { headerResponsive }
          <nav className="nav">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/experience">Experience</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="resume">
              <a href="https://drive.google.com/file/d/14ZJcAaEidYHR-qW5B0XRQrBfhGczhjK_/view?usp=share_link">Resume</a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
