---
title: Lessons Learned And Tips - Responsive Design
cover: 
coverAlt: ""
description: ""
datePublished: 2012-11-09  
dateModified: 2012-11-09 
category: Technology
tags:
- Android
- cutout
- iPhone
- Javascript
- mobile
- Responsive Design
- Tech Blog
- Frontend Development
---

I recently came off my first project where I got to fully implement a responsive design for a desktop to mobile website.  I've done several in the past where we would do certain things for portrait and landscape or tablet to mobile design.  I feel desktop to mobile was defiantly more challenging.  The project was a huge success and there was excellent work by all teams, but there were several few "gotcha" moments that almost happened. These weren't due to lack of attention to detail, but more along the lines of new discoveries.  I'm going to outline some things that we executed that helped out greatly and a few other things that caused some headaches.



## Keep the layout simple


Look at your site content before you begin to implement a responsive design.  Can you present all of your content in one column and it still be relevant? You may want to look into a full mobile implementation if you can't do this.  

You can always use Javascript and CSS to show hide content based on screen widths.  I'd recommend using caution when going wit this approach.  You shouldn't be hiding more than you are showing.

[The Boston Globe](http://www.bostonglobe.com/) is a great example of appropriate use of a responsive design.  



## Be careful with date pickers


Ever try to use the jQuery UI date picker on a mobile phone? It's not fun. You can set the input type of your text box to "date" so that a mobile phone will open the native date picker.  However, some desktop browsers support date inputs  and we didn't want double date pickers.  I found an article on how to handle HTML5 and the jQuery UI date picker [here.](http://tjvantoll.com/2012/06/30/creating-a-native-html5-datepicker-with-a-fallback-to-jquery-ui/) 



## Avoid CSS Clear Fixes


Yeah, I'm guilty of this like crazy.  It's a quick fix, but can be really killer when you need to restructure how the elements align on the front end.  Instead of using a clear fix, you can apply an "overflow" with a value of "auto" or "hidden" to the parent wrapper to get the same effect. This is the best article I've found explaining [CSS floats](http://css-tricks.com/all-about-floats/)



## Watch your device dimensions


For the longest time phone screen dimensions were 320 by 480.  The iPhone 5 and Galaxy S3 have been released and their screen sizes are a little bit different.  The iPhone 5 has a  size of 320 by 568 and the Galaxy S3 is 360 by 640.  Yes, I know their specs say different, but this is if we set their pixel density to 1 instead of 1.5+ (retina). The old methods aren't reliable anymore. We must remain flexible in the mobile world.  I'd recommend portrait going to 479px and landscape going to 767px.  This IS stepping on smaller tablet's toes. The Kindle Fire would pickup our mobile landscape mode. So figure out what will suite your needs best. This is a good example article with some [media query](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/) snippets to use as a starting point.  You will need to tweak for more modern devices, but the logic remains the same.



## Keep the background repeatable


See the above note.  Fancy background images can be problematic when you try to stretch a background to fit all phone dimensions and look crisp. I recommend solid colors, gradients or an image that repeats horizontally well. 



## Avoid using img tags


This mainly applies to using icons.  Trying to dynamically change image tag source attributes can't be done in CSS and you would have to rely on javascript.  I recommend using a block element like a div tag and setting the background to your image.  You can then change the background image in CSS when your mobile layout is applied.  If you are working with an instance where an image tag was already implemented, wrap it in a div, hide the img tag when in mobile and set the div's background.   It's not the most graceful approach, but will work if you are in a pinch.



## Rely on CSS more than Javascript


This is probably the biggest thing I learned.  Do your best to keep all your responsive design related stuff inside of CSS and use media queries to determine when to load them.  I've seen sites use javascript to determine if the screen is landscape or if it is a specific width by attaching an event to window.resize.  This can result in a really glitchy experience if the user manually re-sizes the window.

I hope you found this post useful for your next responsive design project. Thanks for reading.
