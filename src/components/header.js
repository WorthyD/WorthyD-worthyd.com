import React from "react"
import './header.scss';

export default function Header(props) {
  return (
    <React.Fragment>
      <header className="main-nav">
        <div className="nav-container">
          <img
            src="http://www.gravatar.com/avatar/67b727175a880f13e6240c856764670e.png?s=75"
            alt=""
          />
          <h1 id="logo">Daniel Worthy</h1>
          <button id="btnMenu" className="nav-button">
            <i className="fas fa-bars"></i>
          </button>

          <nav className="sub-menu show" id="ddlMenu">
            <a href="index.html">Home</a>
            <a href="resume.html">Resume</a>
          </nav>
        </div>
      </header>
      <div className="head-spacer"></div>
    </React.Fragment>
  )
}
