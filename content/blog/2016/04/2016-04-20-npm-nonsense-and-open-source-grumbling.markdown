---
author: worthyd
comments: true
date: 2016-04-20 01:57:42+00:00
layout: post
link: http://worthyd.com/blog/2016/04/npm-nonsense-and-open-source-grumbling/
slug: npm-nonsense-and-open-source-grumbling
title: NPM Nonsense and Open Source Grumbling
wordpress_id: 865
categories:
- Code Rant
tags:
- industrly
- nodejs
- open source
---

[ReviewDisclaimer]

The dust has already settled on this whole debacle and I think I'm ready to chime in.  If you happened to be away from the internet on March 22nd and 23rd, a developer unpublished a fairly popular node package.  



### The Story


The developer, [Azer Koçulu](https://medium.com/@azerbike), had a product called [Kik](https://github.com/starters/kik). It's a project kick starter/generator. Turns out there is a social media tool called [Kik](https://www.kik.com/) too.  A patent lawyer at Kik requests Azer to unpublish his tool from [NPM](https://www.npmjs.com/) (apparently they were going to be publishing some packages there and wanted to avoid confusion).  Azer says no, Kik emails NPM site support, NPM support team removes the module, and Azer unpublishes all his node packages from NPM (he had about 250).  This probably wouldn't have been a big deal with most developers, but Azer had an amazingly popular package called left-pad.  It had about 2 million installs over the last few months. [Azer's medium post](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.tkebx5coo) explains why he removed the modules. 

I had honestly never heard of either of these "Kiks" before this situation and my initial response was to roll my eyes.  I rolled my eyes again when I saw that left-pad was only 11 lines of code. I'm relatively torn reflecting back on it.  Should we be frustrated at the developer for removing his module, or should we be upset with ourselves for relying on a dependency that should be easily replicated by any competent developer.  Have we become so dependent on other people's code that we've forgotten how to do simple low level logic in code?  I've thought a lot about it and I'm pretty well inline with David Haney [http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/).  Deep down, developers that rely on solely on other people's work annoy me. I use to see a lot of people advertising themselves as Wordpress Developers that would simply find the right plugins and duct tape them all together.  I feel NodeJS has fallen into the same boat due to the popularity of the Node Package Manager.



### I'm an impostor too


I'm guilty for relying on other people's code too.  I do recall a time where I would hunt down jQuery plugins for the simplest application. I would usually end up spending more time configuring JS and hacking CSS to get the plugin to fit my needs. I eventually realized that I could build out exactly what I wanted in the same amount of time.  There is a lot you can learn by reverse engineering other people's code.  I've spent a lot of time digging through [YouMightNotNeedjQuery.com](http://youmightnotneedjquery.com/).  There is a lot of JavaScript functionality you miss out on by learning jQuery before JavaScript.

I've caught myself recently falling back into this hole. I've been fortunate enough to be working on AngularJS projects for the last two years.  I've dug through GitHub a number of times looking for directives and factories to speed up my development efforts.  



### The Real Heroes


I've recently developed a great deal of respect for developers that properly run open source projects.  I've started a couple open source projects and just let them fall by the way side. Open source projects do not pay the bills and require a lot of effort to keep up.  Any "community" on the internet has a knack for becoming toxic.  There are too many projects out there that receive more flack than what they deserve. The community needs to contribute instead of complain to make the projects successful. 

I have a few legitimate projects I want to open source, but I haven't had the time to properly get them into GitHub.  I'll hopefully get something out there soon.



### NPM Event Readings

  * [http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)


  * [http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/)


  * [http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)


  * [https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.tkebx5coo](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.tkebx5coo)
