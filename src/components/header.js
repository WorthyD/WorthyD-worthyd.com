import React from "react"
import "./header.scss"

export default function Header(props) {
  // var header = document.querySelector("header .main")
  // var shrinkOn = 25

  // console.log("initing")

  // window.addEventListener("scroll", function (e) {
  //   console.log("scrolling")
  //   var distanceY = window.pageYOffset || document.documentElement.scrollTop
  //   if (distanceY > shrinkOn) {
  //     //classie.add(header,"smaller");
  //     header[0].className.add
  //   } else {
  //     if ($("header ").hasClass("smaller")) {
  //       $("header .main").removeClass("smaller")
  //     }
  //   }
  // })

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
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
          </nav>
        </div>
      </header>
      <div className="head-spacer"></div>
    </React.Fragment>
  )
}
