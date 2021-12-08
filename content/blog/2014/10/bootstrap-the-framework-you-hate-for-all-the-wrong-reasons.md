---
author: worthyd
comments: true
date: 2014-10-15 
datePublished: 2014-10-15  
dateModified: 2014-10-15 
layout: post
link: http://worthyd.com/blog/2014/10/bootstrap-the-framework-you-hate-for-all-the-wrong-reasons/
slug: bootstrap-the-framework-you-hate-for-all-the-wrong-reasons
title: Bootstrap - The framework you hate for all the wrong reasons.
wordpress_id: 580
categories:
category: Technology
tags:
  - Frontend Development
  - Rant
  - bootstrap
  - efficiency
  - web development
  - Favorite
---

_Note: I got chewed out at work over this post. It was worth it IMHO_

_Disclaimer: The thoughts in this article are my own and do not represent the opinions of my employer past, present or future._

I've been sick in bed the past few days. I tend to do a lot of reading when I'm down and I stumbled on a several articles criticizing the Bootstrap framework. (I also got going on Single Page Web Applications, but that's for a different time.) I got pretty motivated to express my opinions from my experience with the framework.

I've been utilizing the Bootstrap framework for over a year now. I've had a lot of success with it and it always amazes me how much hate it gets. I've spent a lot of time in their source code and I have a really good understanding of how everything works. I've done a lot of responsive work outside of Bootstrap and I'm pretty comfortable arguing for or against it.

This is one of the tag lines from Bootstrap's web site. Do I believe it's true? Yes, I do.

<blockquote>

> ### Designed for everyone, everywhere.
>
> Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.</blockquote>

There is one big thing that gets overlooked a lot when looking at Bootstrap. Bootstrap is trying to do two big things. It's a responsive grid framework and a responsive UI framework. The UI part of the framework provides styled static elements like inputs and buttons, and also has a set of interactive components that work well on a smaller screen.

So what's with all the hate? I have a few reasons I've heard and theories I have.

### You have to use a bunch of random classes to get it to work.

I see a lot of this. There is a trade off though. Many single class elements end up with countless rules that get over ridden based on it's parents elements or the current media query. It's a trade off. Do you want more rules in your style sheet or more classes on your element?

### It's bulky

The full CSS library is around 130kb and the JavaScript library is around 30kb. Is this heavy at a glance? Yes, but there are three things you can do if you don't like this.

1. **Utilize a CDN** - There are several providers that serve up the full Bootstrap package over a CDN. A CDN will provides speed by caching the content and your browser will download it faster because it's on a different domain


2. **Build your own Bootstrap package** - This is the less obvious choice, but you can really slim down the package by using [their tool](http://getbootstrap.com/customize/). You can also download their source code and create a custom build yourself.


3. **Do both 1 and 2** - There should be other static assets in your project. You might as well invest in the service.

### It's trendy and people only want to use it because "Bootstrap" is a buzz word right now

There is a lot of truth behind this statement. Bootstrap is extremely popular right now because it's fairly new. jQuery had a similar buzz around it after it hit mainstream.

### It's not not suitable for large scale applications

I couldn't disagree more. Bootstrap's consistent naming patterns make it ideal for large teams working on large projects. A fully custom responsive implementation requires a lot of documentation and communication across the team. The likely hood of a class being misused is pretty high. With Bootstrap, everyone can easily know how the grid works and work through new pages quickly. I've seen a large number of backend developers wire up pages using Bootstrap with ease. This introduces a level of efficiency that can be extremely challenging to replicate with a custom responsive implementation.

### All Bootstrap sites look the same

Did you expect to use Bootstrap and not have to code your own CSS? Checkout [Wrap Bootstrap](https://wrapbootstrap.com/) and see if you can tell if the sites are "exactly the same". I roll my eyes at this comment a lot. It is very common to come across websites that look stamped with the Bootstrap CSS, but imagine what these sites would look like without it.

### Web Designer: I don't want to design for it

Ok, that's nice. Don't want to be limited to 12 columns? That can be changed by a couple keystrokes in a LESS file. Don't like the default buttons and inputs? A little custom CSS will fix that. The only thing we can't do is recreate a design based on a non-grid layout. Most CSS responsive frameworks have limitations when working with non-grid based layouts. Just do whatever you want. Clever front end developers will figure out how to do it.

### Front End Developer: I have spent a lot of time learning to be an expert on responsive

Don't worry about this. I personally know several SQL developers that panicked when Linq to SQL/Entity Framework came out. They thought that they would be out of the job because anyone who knew C#/VB would be writing their SQL for them. This is 100% not true. A framework can get you 90% there. Knowledge and experience will get you the rest of the way. The experience you have in the core technology is always relevant. The same can be said about jQuery and JavaScript. jQuery made JavaScript 100Xs easier to write. CSS precompilers can be thrown in this boat too. jQuery and Linq also introduced ways to write really bad JS and SQL if you weren't careful. Bootstrap is no different. It can help you write simple and quick responsive elements, but can also create overly complicated and complex elements. As an experienced FE Dev, it's your responsibility to identify the right and wrong ways.

### You're old fashioned and boring

If it ain't broke, don't fix it. I really hate LESS. I've been using it heavily for a year now. I just hate it. I see too much bad code, improperly named global variables, hundreds of media queries that could be consolidated, and excessively over qualified selectors due to nesting. Bootstrap contains the ONLY LESS files I've seen that do something cool. They create loops for generating the CSS for the grid layout and calculate out exact widths with it.

I feel like I have much cleaner and better performing CSS without LESS, but it takes me a little bit longer to do. You could say the same about Bootstrap. A lot of people said the same thing about JavaScript with jQuery and SQL with LinqToSQL. These tools and libraries get widely adopted and we can't avoid working without them. I've seen a lot of bad JavaScript due to jQuery and several websites crash due to bad Linq statements. Why do I continue to use LESS, jQuery, and Linq? Efficiency. I can code with or without them. It doesn't matter. I want to be versatile and quick. I can get stuff done a lot quicker with them. The same can be applied to Bootstrap. It's a new tool that introduces a lot of efficiencies. It can also introduce potential inefficiencies much like the tools above, but a good developer should catch these before they become a problem.

Bootstrap is a very capable front end framework that makes responsive easy and quick to implement. This is much like what jQuery did with JavaScript. Is Bootstrap something I'm going to implement on every one of my projects? No, but it will be my goto framework when a project fits the mold and I can save time. It's another tool to add to my toolbelt that will allow me to be innovative and more versatile.
