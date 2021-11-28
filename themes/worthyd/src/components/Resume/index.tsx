import React from 'react';
import './styles.scss';

const Resume = (): JSX.Element => (
  <>
    <div className="resume">
      <header>
        <div className="main">
          <h1>Daniel Worthy</h1>
          <h2>Full Stack Web Developer/Architect</h2>
        </div>
      </header>
      <main>
        <aside>
          <div className="my-info">
            <img
              src="http://www.gravatar.com/avatar/67b727175a880f13e6240c856764670e.png?s=280"
              alt="Daniel Worthy"
              className="head-shot"
            />

            <ul>
              <li>
                <i className="far fa-envelope"></i> danieljworthy[at]gmail
              </li>
              <li>
                <i className="fas fa-globe"></i> worthyd.com
              </li>
              <li>
                <i className="fab fa-github"></i> worthyd
              </li>
              <li>
                <i className="fab fa-twitter"></i> worthyd
              </li>
            </ul>
          </div>

          <header>
            <h2>Languages</h2>
          </header>
          <div>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C#</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
            </ul>
          </div>
          <header>
            <h2>Frameworks &&nbsp;Tools</h2>
          </header>
          <div>
            <ul className="skill-list">
              <li>Angular 2+</li>
              <li>Angular Material</li>
              <li>NGRX</li>
              <li>Asp.Net MVC</li>
              <li>Entity Framework</li>
              <li>.Net Core</li>
              <li>Microsoft SQL Server</li>
              <li>Git</li>
              <li>Azure DevOps</li>
              <li>Visual Studio</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </aside>
        <article>
          <section>
            <header>
              <h2>About</h2>
            </header>
            <div>
              <p>
                I'm a full stack web developer with over 12 years experience in
                Microsoft and JavaScript tech stacks. I find a lot of excitement
                in creative problem solving and continuous improvement.
              </p>
              <p>
                I want to write high quality meaningful software with a great
                team of developers. I believe in leading by example and learning
                from your mistakes. Great developers have to be able to
                constantly evolve with the constant changing development
                landscape.
              </p>
            </div>
          </section>
          <section>
            <header>
              <h2>Experience</h2>
            </header>
            <div>
              <h3>RevUnit November 2019 - Present</h3>
              <h4>Principal Engineer | September 2021 - Present</h4>
              <p>
             </p>

              <h4>Senior Engineer | November 2019 - September 2021</h4>
              <p>
                Work with mixed teams to provide software solutions that allow
                companies to work better. Serve in the role of "Team Expert" in
                the Angular platform.
              </p>
            </div>
            <div>
              <h3>
                Staff Software Engineer | Stonehenge Technology Labs March 2019
                - October 2019{' '}
              </h3>
              <h3>Staff Software Engineer | OneStone Jan 2019 - March 2019</h3>
              <p>
                I wrote software that helped customers with their eCommerce
                needs. I architected front end solutions using Angular, NGRX,
                and Angular Material. I also maintained middleware written in
                .Net Core. We followed agile practice in planning and executing
                software releases. <br />
                <br />{' '}
                <small>
                  <em>
                    OneStone's software team was broken out into Stonehenge Tech
                    Labs in March 2019.
                  </em>
                </small>
              </p>
            </div>
            <div>
              <h3>Director, Technology | VML Jan 2018 - Jan 2019</h3>
              <p>
                Rockfish Digital was merged with VML in early 2018. I lead a
                team of 4 to 8 developers. I manage weekly work forecasting,
                assign projects, contribute to budget estimates, and contribute
                to the Monthly Technology Report. I continue to guide technology
                direction and provide guidance in technology projects.{' '}
              </p>
            </div>
            <div>
              <h3>Rockfish Digital | 2007 - 2018</h3>
              <h4>Enterprise Architect | Jan 2017 - Jan 2018</h4>
              <p>
                I'm responsible for directing technical standards and
                development best practices across Rockfish technology
                disciplines. I also serve as a technical expert with a a broad
                level of knowledge across multiple disciplines. I traditionally
                apply my knowledge to multiple projects across the organization.
              </p>
              <h4>Technology Architect - Front End | May 2013 - Jan 2017</h4>
              <p>
                I was primarily responsible for identifying new technologies to
                implement and bringing the technology department up to speed
                with them. I also provided technical standards direction, best
                practice documentation, and promoted code quality via
                mentorship. I was involved in establishing and assessing
                developer skill tests for job applications and contractor
                applicants.
              </p>
              <h4>Sr. Developer | Apr 2011 - May 2013</h4>
              <h4 className="hp">Developer II | Nov 2009 - Apr 2011</h4>
              <h4 className="hp">Developer I | Nov 2007 - Nov 2009</h4>
              <p className="hp">
                Developed websites using Asp.net and JavaScript. Evolved my
                skill set throughout the years to be as useful as possible.
                Worked and shipped over 75 projects during this time frame.
              </p>
            </div>
            <div>
              <h3>University of Arkansas IT Readiness 2016 - 2018</h3>
              <h4>Front End Development Instructor | Oct 2016 - Jan 2018</h4>
              <p>
                I instructed a 6 month long Front End Development Course.
                className size is from 12 to 14 students. Students are
                established in a profession, but are wanting to either expand a
                skill set or change careers. I'm responsible for establishing
                curriculum, writing material, administering assignments, and
                coaching students.
              </p>
            </div>
          </section>
          <section>
            <header>
              <h2>Education / Awards</h2>
            </header>
            <p>
              Bachelor of Science in Business Administration 2007 | Major: Small
              Business Management | Minor: Information Systems
            </p>
            <p>Alpha Phi Omega - Service Fraternity - Class of 2005</p>
            <p>Eagle Scout - Boys Scouts of America - 2001</p>
          </section>
        </article>
      </main>
    </div>
  </>
);
export default Resume;
