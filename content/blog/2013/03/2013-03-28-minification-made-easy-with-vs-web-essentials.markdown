---
author: worthyd
comments: true
date: 2013-03-28 11:27:24+00:00
layout: post
link: http://worthyd.com/blog/2013/03/minification-made-easy-with-vs-web-essentials/
slug: minification-made-easy-with-vs-web-essentials
title: Minification Made Easy with VS Web Essentials for Visual Studio 2012
wordpress_id: 463
categories:
- Frontend Development
- Quick Code Tips
tags:
- css
- front end performance
- Javascript
- productivity
- visual studio
- web development
---





## Why do we care about minification?

Minification is the easiest thing you can do to your websites to improve the performance of the front end.  Minifying is going to take all your code and cram it into one line.  This can decrease the size of the file by up to 40%.  That is a lot less for your browser to download and will speed up the rendering of your pages.



## Why choose Web Essentials?

VS Web Essentials provides the easiest way to setup minification. The extension can be installed without leaving Visual Studio and it's very easy to find in the extensions and updates portion of Visual Studio.  There are no build events to configure. The minification can either happen on save or be done manually. There isn't a complicated configuration file that you will need to setup.  The extension generates an easy to read config file. 

Web Essentials provides a TON of features that make CSS and Javascript coding a lot easier. The extension is very useful even if you are not interested in the minification  functionality.



## CSS Tricks

You can enable an option to prevent the minification from removing CSS comments that have been marked as important.  This will allow you to keep your version numbers and licensing in your comments.  I've tried to hunt down other minification processes that wouldn't remove important comments and I couldn't find any.



## Javascript Tricks

You can enable Javascript Source Maps that will allow you to use your minified JS file in development and easily find what line bugs are occurring on. Below are some great articles on Source Maps.



	
  * [http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

	
  * [http://www.elijahmanor.com/2013/01/the-magic-of-jquery-source-map.html](http://www.elijahmanor.com/2013/01/the-magic-of-jquery-source-map.html)

	
  * [http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/](http://net.tutsplus.com/tutorials/tools-and-tips/source-maps-101/)



This is the first time I've done any video demos before. I'd really appreciate any feedback that would help me improve my presentation skills.
