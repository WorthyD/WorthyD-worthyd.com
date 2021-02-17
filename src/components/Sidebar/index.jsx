import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import './styles.scss';

function Sidebar({}) {
  return (
    <div className="sidebar">
      <img
        src="http://www.gravatar.com/avatar/67b727175a880f13e6240c856764670e.png?s=280"
        alt="Daniel Worthy"
        className="info-head-shot"
      />
      <h3>WorthyD</h3>
      <nav className="sidebar__social-links">
        <a href="http://www.twitter.com/worthyd" target="_blank">
          <i className="fab  fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/WorthyD" target="_blank">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/danieljworthy/" target="_blank">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="http://www.linkedin.com/in/worthyd" target="_blank">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </nav>
      <div className="disclaimer">
        <p>
          Disclaimer: All opinions are my own and do not represent the opinions of my
          employer past, present or future.
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
