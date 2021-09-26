import React from "react"
import "./header.scss"

export default function Header(props) {
  // const header = document.querySelectorAll("header")
  // const shrinkOn = 25

  // // I know there is an easier way to do this in react
  // // just trying to shovel it out as soon as I can.
  // console.log('header', header)
  // window.addEventListener("scroll", e => {
  //   console.log('scroll', header);
  //   var distanceY = window.pageYOffset || document.documentElement.scrollTop
  //   if (distanceY > shrinkOn) {
  //     header.forEach(x => x.classList.add("smaller"))
  //   } else {
  //     header.forEach(x => {
  //       x.classList.add("smaller")
  //       if (x.classList.contains("smaller")) {
  //         x.classList.remove("smaller")
  //       }
  //     })
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
            <a href="/blog/categories/technology">Blog</a>
            <a href="/uses">Uses</a>
          </nav>
        </div>
      </header>
      <div className="head-spacer"></div>
    </React.Fragment>
  )
}
