import React from 'react';
import './index.scss';
import * as S from './style';

const HomeBody = ({}): JSX.Element => (
  <>
    <div className="row-banner">
      <h2>I Like To Code</h2>
    </div>
    <div className="row callout-3">
      <div className="callout">
        <i className="fa fa-code" aria-hidden="true"></i>
        <h2>Tech Stack</h2>
        <p>
          I've been developing web applications since 2007 and I've had a pretty
          broad tech stack. I currently primarily focus on Angular and
          occasionally dabble in C#.
        </p>
        <p>
          <S.NavButton noBasePath to="/resume">
            Resume
          </S.NavButton>
          {/* <a className="btn btn-default" href="/resume">
          </a> */}
        </p>
      </div>
      <div className="callout">
        <i className="fa fa-rss" aria-hidden="true"></i>
        <h2>Tech and Geek Blog</h2>
        <p>
          I've enjoyed blogging since 2003. I've dug up some of my old posts and
          converted them to this format. Enjoy my college cringe posts.
        </p>
        <p>
          Right now, I'm mainly blogging about tech, wood working and video game
          stuff.
        </p>
        <S.NavButton to="/">Blog</S.NavButton>
      </div>
      <div className="callout">
        <i className="fab fa-youtube" aria-hidden="true"></i>
        <h2>YouTube Tutorials</h2>
        <p>
          I've done a couple of YouTube series on several topics. These are
          pretty out of date now, but I'm proud of what I was able to do with
          what little time I have.
        </p>

        <S.NavButton to="https://www.youtube.com/user/CaptainWorthy/">
          YouTube Channel
        </S.NavButton>
        {/* <a
          className="btn btn-default"
          href="https://www.youtube.com/user/CaptainWorthy/"
        >
          YouTube Channel
        </a> */}
      </div>
      {/* <div className="callout">
          <i className="fas fa-microphone"></i>
          <h2>Speaking Engagements</h2>
          <p>
            I occasionally step out of my comfort zone and speak at local tech
            conferences.{' '}
          </p>
          <p>
            I'm always looking for opportunities meet new people and engage in
            meaningful conversations.
          </p>
        </div> */}
      <div className="callout">
        <i className="fas fa-microphone"></i>
        <h2>Gear</h2>
        <p>
          I get a lot of questions about what gear I use for gaming and working
          from home. I put all my gear into a post for easy reference.
        </p>
        <S.NavButton to="/uses">Gear</S.NavButton>
        {/* <a className="btn btn-default" href="/uses">
          Gear
        </a> */}
      </div>
      <div className="callout">
        <i className="fas fa-chart-line"></i>
        <h2>D2 Clan Dashboard</h2>
        <p>
          I've been working on a dashboard for managing Destiny 2 Clans. This is
          my current passion project.
        </p>
        <S.NavButton to="https://github.com/WorthyD/d2-clandashboard">
          GitHub Repo
        </S.NavButton>
        &nbsp;&nbsp;
        <S.NavButton to="http://destinyclandashboard.com/">Website</S.NavButton>
        {/* <a
          className="btn btn-default"
          href="https://github.com/WorthyD/d2-clandashboard"
        >
          GitHub Repo
        </a>
        <a className="btn btn-default" href="http://destinyclandashboard.com/">
          Website
        </a> */}
        {/* <!-- <p>I really enjoy earning achievements when gaming. They encourage challenges in game and introduce new ways
                    to play.</p>
                <p> I couldn't find a good solution for tracking achievements in Steam games so I wrote a Windows Universal App.
                    I'm currently working on a web version of the app in my limited spare time.</p> -->
                <!-- <p>
                    <a className="btn btn-default" href="http://steamachievementtracker.com">Tracker Website</a>
                </p> --> */}
      </div>
      <div className="callout">
        <i className="fab fa-steam" aria-hidden="true"></i>
        <h2>Archived Project: Steam Achievement Tracker</h2>
        <p>
          Several years back I built out a Steam Achievement Tracker for the
          Windows Universal Platform. Steam changed their APIs and I archived
          the project. I may convert it to a web application in the future.
        </p>
        {/* <!-- <p>I really enjoy earning achievements when gaming. They encourage challenges in game and introduce new ways
                    to play.</p>
                <p> I couldn't find a good solution for tracking achievements in Steam games so I wrote a Windows Universal App.
                    I'm currently working on a web version of the app in my limited spare time.</p> -->
                <!-- <p>
                    <a className="btn btn-default" href="http://steamachievementtracker.com">Tracker Website</a>
                </p> --> */}
      </div>
    </div>
    <section className="banner-accent">
      <header className="row-banner">
        <h2>I Like Building Stuff</h2>
      </header>
      <div className="row callout-4">
        <div className="callout">
          <i className="fa fa-gavel" aria-hidden="true"></i>
          <h2>Wood Working</h2>
          <p>
            I've been wood working on my own since about 2007, but have been
            interested in it since I could pick up a hammer.
          </p>
        </div>
        <div className="callout">
          <i className="fa fa-th" aria-hidden="true"></i>
          <h2>LEGO</h2>
          <p>
            I've always been obsessed with LEGO models. I've cataloged most of
            my old sets and have started putting them back together.
          </p>
        </div>
        <div className="callout">
          <i className="fa fa-wrench" aria-hidden="true"></i>
          <h2>Ikea Furniture</h2>
          <p>My wife and I like making 4 hour trips to the closest Ikea. </p>
        </div>
      </div>
    </section>

    <a name="gaming"></a>
    <section className="two-col-group">
      <div className="col no-bg">
        <h2>Gaming</h2>
        <p>
          I game when I can. My habits and tastes have evolved over the years. I
          spend most of my time playing Destiny 2 solo and LEGO games with my
          kids.
        </p>
      </div>
      <div className="col">
        <ul className="button-link-list">
          <li>
            <S.NavButton to="https://braytech.org/3/4611686018467238913/2305843009310516628/now">
              Destiny 2
            </S.NavButton>
          </li>
          <li>
            <S.NavButton to="http://steamcommunity.com/id/WorthyD/">
              Steam Profile
            </S.NavButton>
          </li>
          <li>
            <S.NavButton to="https://my.playstation.com/WorthyD">
              PSN Profile
            </S.NavButton>
          </li>
          <li>
            <S.NavButton to="https://account.xbox.com/en-us/profile?gamertag=WorthyD3136">
              Xbox Profile
            </S.NavButton>
          </li>
          <li>
            <S.NavButton to="https://www.bungie.net/en/Profile/254/612698/WorthyD">
              Bungie Profile
            </S.NavButton>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default HomeBody;
