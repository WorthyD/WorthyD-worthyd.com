---
author: worthyd
comments: true
date: 2010-07-20 17:53:11+00:00
layout: post
link: http://worthyd.com/blog/2010/07/the-console/
slug: the-console
title: 'My Favorite Javascript Tool: The Console'
wordpress_id: 9
category: Technology
tags:
- Javascript
- Quick Code Tips
---

I've been a big fan of [Firebug](http://getfirebug.com/) for a really long time. It took me a while to learn how to fully utilize the console.  

About two years ago I would add javascript alerts everywhere to debug stuff.  I eventually learned that doing `console.log()` would dump whatever your debugging to the console.  Works great with jQuery selectors to make sure they work and Json results from web services.  You can also run block of code in the console, but I'm wanting to go over the log feature of it.
<!-- more -->
It didn't take long for me to realize IE isn't console friendly.  It throws an error and causes everything to break. Great stuff if you forget to comment out or remove them.

I learned at Mix10 that you need to feature detect and not browser detect.  I found this if statement in a jQuery plugin.

`
if (window.console && window.console.log)
        console.log(msg);
`

I use this block of code on almost everything I work on to help debug.

`
var CLog = function (msg) {
    if (window.console && window.console.log)
        console.log(msg);
};
`

This block of code will do two things for you. It makes it a lot easier to debug. `CLog('foo')` over `console.log('foo')`. It will also not break your script. This wont throw an error in IE 6,7 or 8.  Its still important to remove all the references when you're done. If forgotten, it is a lot less embarrassing than a forgotten `alert('foo');`

Feel free to share if you have another way of using the Console for debugging.
