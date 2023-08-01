import './styles.scss';

const Resume = () => (
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
              <li>React</li>
              <li>Apollo Client</li>
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
            <div className="job">
              <div className="job-date">
                <p>2019-11 - Present</p>
              </div>
              <div className="job-info">
                <h3>RevUnit</h3>
                <h4>Principal Engineer | September 2021 - Present</h4>
                <ul>
                  <li>
                    Perform managerial duties for a team of 2 to 3 engineers
                  </li>
                  <li> Serve as Angular expert within the company</li>
                </ul>

                <h4>Senior Engineer | November 2019 - September 2021</h4>
                <ul>
                  <li>
                    Architect front end solutions using Angular(10+), Angular
                    Material, NGRX, React, Material UI, and D3.js
                  </li>
                  <li>
                    Provided assistance when needed for backend services using
                    .Net Core and Spring Boot
                  </li>
                  <li>
                    Participate in Agile rituals including sprint planning, task
                    estimation, retrospectives and client demos
                  </li>
                </ul>

                {/* <p>
                  Work with mixed teams to provide software solutions that allow
                  companies to work better. Serve in the role of "Team Expert" in
                  the Angular platform.
                </p> */}
              </div>
            </div>
            <div>
              <div className="job">
                <div className="job-date">
                  {' '}
                  <p>2019-01 - 2019-10</p>
                </div>
                <div className="job-info">
                  <h3> OneStone / Stonehenge Technology Labs</h3>
                  <h4>Staff Software Engineer | March 2019 - October 2019 </h4>
                  <h4>Staff Software Engineer | Jan 2019 - March 2019</h4>
                  <ul>
                    <li>
                      Wrote software that helped customers with their eCommerce
                      needs
                    </li>
                    <li>
                      Architected front end solutions using Angular, NGRX, and
                      Angular Material.
                    </li>
                    <li>
                      Followed agile practice in planning and executing software
                      releases
                    </li>
                  </ul>
                  <small>
                    <em>
                      OneStone's software team was broken out into Stonehenge
                      Tech Labs in March 2019.
                    </em>
                  </small>
                </div>
              </div>
            </div>
            <div>
              <div className="job">
                <div className="job-date">
                  {' '}
                  <p>2016-10 - 2018-01</p>{' '}
                </div>
                <div className="job-info">
                  <h3>University of Arkansas - IT Readiness </h3>
                  <h4>Front End Development Instructor </h4>
                  <ul>
                    <li>
                      Instructed two 6 month long Front End Development Courses
                    </li>
                    <li>
                      Class size was from 12 to 14 students already in
                      professional jobs. Students were seeking new technology
                      careers.
                    </li>
                    <li>
                      Responsible for establishing curriculum, writing material,
                      administering assignments, and coaching students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="job">
                <div className="job-date">
                  <p>2007-11 - 2019-01</p>
                </div>
                <div className="job-info">
                  <h3>Rockfish Digital / VML</h3>
                  <h4>Director, Technology | VML Jan 2018 - Jan 2019</h4>
                  <ul>
                    <li>Lead a team of 4 to 8 developers</li>
                    <li>
                      Manage weekly work forecasting, assign projects,
                      contribute to budget estimates, and contribute to the
                      Monthly Technology Report
                    </li>
                    <li>
                      Continue to guide technology direction and provide
                      guidance in technology projects
                    </li>
                  </ul>
                  <div className="mb">
                    <small>
                      <em>
                        Rockfish Digital was merged with VML in early 2018.
                      </em>
                    </small>
                  </div>
                  <h4>Enterprise Architect | Jan 2017 - Jan 2018</h4>
                  <ul>
                    <li>
                      Responsible for directing technical standards and
                      development best practices across Rockfish technology
                      disciplines
                    </li>
                    <li>
                      Serve as a technical expert with a a broad level of
                      knowledge across multiple disciplines
                    </li>
                    <li>
                      Apply knowledge to multiple projects across the
                      organization
                    </li>
                  </ul>
                  <h4>
                    Technology Architect - Front End | May 2013 - Jan 2017
                  </h4>
                  <p>
                    I was primarily responsible for identifying new technologies
                    to implement and bringing the technology department up to
                    speed with them. I also provided technical standards
                    direction, best practice documentation, and promoted code
                    quality via mentorship. I was involved in establishing and
                    assessing developer skill tests for job applications and
                    contractor applicants.
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
              </div>
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
