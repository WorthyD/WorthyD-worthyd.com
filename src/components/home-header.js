import React, { Fragment } from "React"

export default function HomeHeader(props) {
  const bgClass = "bg-" + (Math.floor(Math.random() * 5) + 1)

  return (
    <Fragment>
      <header className={`home-info bg ${bgClass} `}>
        <div className="overlay">
          <div className="info">
            <img
              src="http://www.gravatar.com/avatar/67b727175a880f13e6240c856764670e.png?s=280"
              alt="Daniel Worthy"
              className="info-head-shot"
            />
            <section className="">
              <h1 className="card-title">
                Hey, I'm
                <span>Daniel Worthy</span> and I like to build stuff.
              </h1>
              <p className="card-text">
                I am a web application developer out of Northwest Arkansas. I
                enjoy programming, woodworking, gaming, and being a dad.{" "}
              </p>
              <a href="http://www.facebook.com/worthyd" className="card-link">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="http://www.twitter.com/worthyd" className="card-link">
                <i className="fab  fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/WorthyD" className="card-link">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/danieljworthy/"
                className="card-link"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="http://www.linkedin.com/in/worthyd"
                className="card-link"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/user/CaptainWorthy/"
                className="card-link"
              >
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
            </section>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
