---
author: worthyd
comments: true
date: 2011-03-21 
datePublished: 2011-03-21  
dateModified: 2011-03-21 
publishDate: 2011-03-21  
modifiedDate: 2011-03-21 20:31:55+00:00
layout: post
link: http://worthyd.com/blog/2011/03/mobile-website-methods-with-asp-net-mvc-part-1-content-sites/
slug: mobile-website-methods-with-asp-net-mvc-part-1-content-sites
title: Mobile Website Methods with Asp.Net MVC. Part 1 - Content Sites
wordpress_id: 542
category: Technology
tags:
- Asp.net
- jQuery
- jQuery Mobile
- mobile
- mvc
- Tech Blog
- Quick Code Tips
---

I have a fair amount of experience building mobile sites. Mobile sites are essential now because so many people are using mobile phones and tablet devices to browse the internet.  Many sites don't have great mobile experience. They use flash, rely heavily on hover effects, or they have so much content that it takes forever for the page to load.

I'm going to show how I made a mobile version of my site in just a couple hours using Asp.Net MVC and jQuery mobile.  My site is primarily content and has very little code involved on it. My website is very basic and very straight forward.  I browsed through my site and decided to find the basic information I wanted to display on my mobile version.  In my case, I wanted to display my portfolio, resume, about me, contact me, some of my social links, and an about my mobile page so people could see what technology I used.
<!-- more -->
In my project file, I added an Area for my mobile section.  You could also just create an additional view area, but I wanted to keep everything separated. I created a view for all of the pages I wanted.

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/solution.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/solution.png)

The first real step was to build out my master page and get all of my jQuery Mobile includes plugged in.  jQuery hosts their mobile library so you can reference straight from them.  You can read up more on the jQuery Mobile syntax [here](http://jquerymobile.com/).

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/master-300x150.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/master.png)

I then made a simple list view on my home page for navigation.

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/listview-300x55.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/listview.png)

I then went back into my main project and moved the main content of my pages into partial views and updated those pages to reference the partial views.

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/partial.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/partial.png)

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/codepartial-300x77.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/codepartial.png)

I then went back into my Mobile Area and referenced the same partial view.

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/mobileportfolio-300x83.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/mobileportfolio.png)

Now all I needed to do was style the page. This didn't really take much effort because I wanted it to look the same. I adjusted font-sizes and margins to accommodate the mobile device.  In the end, my custom CSS file was only 40 lines.  jQuery Mobile has a really nice theme that takes care of themes. I'm not a designer at all so I really utilized this.  

When it was all said and done I had a mobile site that looked like this:

[![alt](http://blog.worthyd.com/wp-content/uploads/2011/03/mobilehome-138x300.png)](http://blog.worthyd.com/wp-content/uploads/2011/03/mobilehome.png)



Really simple to do. This project took me less than three hours to do.

Here are a few additional pointer to developing for mobile devices.




  1. Remember your developing for a mobile device. Don't pull in 100 records on page load.


  2. Make sure your layout is flexible.  A lot of people will swap between portrait and landscape. Also, remember not all screens have the same resolution.


  3. If you choose to do user agent detection, make sure your list of targeted user agents are easy to find so it will be easy to update.


  4. Always have a link to view your full site from a mobile device. Don't force people to stay on your mobile site if they are on a mobile device



Thanks, there is plenty more to come!
