---
author: worthyd
comments: true
date: 2013-08-17 01:42:42+00:00
layout: post
link: http://worthyd.com/blog/2013/08/worthyds-css-guide-for-rookie-css-devs-and-backend-devs/
slug: worthyds-css-guide-for-rookie-css-devs-and-backend-devs
title: WorthyD's CSS guide for Rookie CSS Devs and Backend Devs
wordpress_id: 516
categories:
- Frontend Development
- Quick Code Tips
tags:
- best practices
- css
- front end performance
- web development
---

I've dug around for a long time for CSS best practices.  I've found tons of contradicting and wishy washy rules. Most of these only make sense to people who are in CSS every day and are highly debatable.  I'm going to try to give an overview of what I see as most important and explain why in a way most developers can understand.  This should point you in the direction to get you into more advanced CSS and not drive your cut out people insane with sloppy CSS.

I'm going to go ahead and throw out that I firmly believe that you should easily be able to completely re-skin your web content without needing to roll HTML updates.  I believe class names being specific to the content and not packed with a bunch of generic classes.



## Know the basics

### Know the best way to include style sheets.

There are two ways to include style sheets.  
Method 1 - The Link Tag:
[code lang="xml"]
<link rel='stylesheet' href='a.css' />
[/code]
Method 2 - Import:
[code lang="xml"]
<style>
     @import url('a.css');
</style>
[/code]
For performance, only use method 1.  Method 2 will block parrallel downloading of style sheets and slow down the rendering of the page.


### Do not use any inline styles. Period. EVER!

Inline styles kill re-usability and maintainability .  It's super easy to tack on inline styles if you don't want to dig through a thousand line CSS file.  


### Avoid using style tags at a page level

This is mainly for tidiness.  If you need to modify styles specifically for a page, create a style sheet for that page and reference it with a link tag. 



## Stay organized




### Combine & Compress your CSS

Personally, I like having multiple CSS files to keep things organized. For production, I'll combine and compress them into one file.  This helps avoid having a CSS file several thousand lines long that is difficult to maintain.
[code lang="xml"]
@if(IsProduction()){
  <link rel="stylesheet" href="main.min.css" />
}else{
  <link rel="stylesheet" href="reset.css" />
  <link rel="stylesheet" href="base.css" />
  <link rel="stylesheet" href="forms.css" />
  <link rel="stylesheet" href="buttons.css" />
}
[/code]


### Keep your CSS Selectors organized

Section off your style sheet so people know what they are looking at. You can use comments to help identify what section they are looking at.
[code lang="css"]
/*==========
    Header
===========*/
.logo {/*RULES*/}

/*===========
    Navigation
============*/
#nav{ /*RULES*/}
#nav li {/*RULES*/}
[/code]



## Selectors

CSS selectors are the key to having clean and maintainable CSS. There are some pretty simple rules you can follow to ensure you don't end up with a bunch of messy CSS.  


### Classitis and Specificity

Classitis is having to rely on many class rules to select your element.
[code lang="xml"]
<style>
.nav .navItem .navElement{
     color:#fff;
}
</style>
<ul class="nav">
     <li class="navItem"><a class="navElement" href="#">Home</a></li>
     <li class="navItem"><a class="navElement" href="#">About</a></li>
     <li class="navItem"><a class="navElement" href="#">Login</a></li>
</ul>
[/code]
The example above contains a lot of classes in the HTML that can be condensed.  The selector also is longer that needed. You can clean up like so.
[code lang="xml"]
<style>
.nav a{
     color:#fff;
}
</style>
<ul class="nav">
     <li><a href="#">Home</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Login</a></li>
</ul>
[/code]
Now this is only ideal if the `ul.nav` element will never have additional child `a` elements.

It's also important to keep your selectors as short as needed.  A selector with 5 or 6 selector elements isn't ideal.  You can control this by understanding CSS Specificity. Here are two articles that do a better job explaining it than I could. [CSS Specificity: Things You Should Know](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/) & [Specifics on CSS Specificity](http://css-tricks.com/specifics-on-css-specificity/)



### Naming Conventions

Selector naming conventions are another religious argument that can be debated all day long.  
[code lang="css"]
.navMenu {margin: 10px;}

.nav-menu {margin: 10px;}

.nav_menu {margin: 10px;}
[/code]
All of these are valid by the W3C and pass CSSLint.  The important thing is to STAY CONSISTENT!!!!  Personally, I camel case because jQuery UI uses hyphens. It's easy to see what rules are mine and what is theirs.



### Utility Classes

Avoid use of utility classes. The class names aren't always descriptive enough and relying on them could cause you to need to roll both CSS and HTML in your site updates. 
[code lang="css"]
/*Common Utility Classes I see that bug me*/
.fr {float:right}
.fl {float:left}
.mb15{ margin-bottom:15px;} 
/*what happens if you're asked to move the content? 
Make another class for margin-bottom 13 and update your HTML?*/
[/code]
Using utility classes will speed up your coding, but will hinder the maintainability of you code.  You're HTML elements could also end up with 4 or 5 classes on one element.



### Understand Child Selectors

Using child selectors can help prevent the need of overwriting parent element styles.  These aren't supported in IE7 and below. Use when you can, because they can help prevent a lot of headaches. 
[code lang="xml"] 
<style>
ul li {color:blue; margin-bottom:15px}
ul li ul li {color:#fff; margin-bottom:0px}
</style>
<ul>
	<li>Blue</li>
	<li>Blue</li>
	<li>Blue
		<ul>
			<li>white no margin</li>
		</ul>
	</li>
</u>
[/code]
We can re-write the CSS selectors and not have to overwrite the `margin-bottom` rule by doing it this way.  It's a real primitive example, but I run into this issue daily. 
[code lang="xml"] 
<style>
ul > li {color:blue; margin-bottom:15px}
ul ul > li {color:#fff;}
</style>
[/code]
[Read more about Child and Sibling Selectors](http://css-tricks.com/child-and-sibling-selectors/)


### Chaining Classes


Chaining classes can be really helpful.  But like child selectors, it doesn't fully work in IE6 and IE7.  You can also end up with an element that has a ton of classes attached to it. 
[code lang="xml"]
<style>
   .icon{background-image: url(sprite.png);}
   .icon.save {background-position:-10px 0}
</style>
<input type="button" class="icon save" value="Save" />
[/code]

[Read more about mulit class selectors](http://css-tricks.com/multiple-class-id-selectors/)



## Have Clean Properties


Your selectors are really only half of the CSS you have to really pay close attention to. You need to have clean CSS properties.  Here are something things that will help cause less grief for the person coding after you.



### Alphabetize Your Properties


[code lang="css"]
.selector {
	width: 100px;
	margin: 10px
	border: 1px solid #000;
	padding: 5px
	float: right;
}
.selector {
	border: 1px solid #000;
	float: right;
	margin: 10px
	padding: 5px
	width: 100px;
}
[/code]
You can find properties a lot quicker when they are alphabetized.  Web browser tools will also alphabetize them in your DOM inspector.  It took me a long time to get this down, but has helped out a lot.


### Use Shorthand Properties


Short hand will help out on your file size and makes it more readable.
[code lang="css"]
.selector{
	margin-bottom: 5px
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 5px;
}
.selector{ /*Same rule, but in shorthand*/
	margin: 5px 10px;
}
[/code]
[Read more on CSS Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)



### Zero Values

Don't use px on zero values.  Several reasons to do this, but it's just a lot cleaner code and the "px" isn't required.
[code lang="css"]
/*discouraged*/
.selector {
     margin: 10px 0px 5px 0px;
}
/*better*/
.selector {
     margin: 10px 0 5px 0;
}
[/code]


### Image Reference

It's important to use caution when referencing CSS. This isn't an issue if you are 100% sure where your site is going to live. If you do your development on blah.localhost and your site ends up being hosted on blah.localhost/blah/ your image references will be broken if absolutely referenced.
[code lang="css"]
/*image reference will break if app is moved to a sub directory or file is hosted on cdn*/
.img{
    background-image: url(/content/images/img.png);
}
/*this image reference makes  your CSS more portable*/
.img{
    background-image: url(../images/img.png);
}
[/code]



### Do not use CSS hacks and avoid using !important

Back in the day, it was really common to use browser hacks to fix IE specific issues. This should be avoided at all costs.  You can use conditional comments to target specific versions of IE if you need to. In the last few years, I've only had to use conditional comments a couple of times.

Using !important after a CSS rule jumps the specificity all the way up.  Learn about CSS specificity to avoid using !important.  ONLY use if if you have a nasty javascript plugin that writes out styles you don't like.



## Frameworks


There are tons of CSS and Javascript frameworks to help you out with layout, feature detection and all sorts of other fun stuff.  There's Mondernizer and Bootstrap to name a few.  Out of the box, these frameworks are potentially dangerous for the performance of your application.  
Modernizer has a TON of feature detecting, but lets say you aren't using Canvas or Video tags. Do you really need Modernizer to detect those and include all the code to detect them?  Go get a custom build of it to plug into your site.

Well that turned out a lot longer than I had initially expected. I hope you found something useful. Please fell free to leave any feedback and I'll do my best to keep good stuff coming.
