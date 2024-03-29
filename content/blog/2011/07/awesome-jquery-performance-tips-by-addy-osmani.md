---
title: Awesome jQuery performance tips by Addy Osmani.
cover:
coverAlt: ''
description: ''
datePublished: 2011-07-19
dateModified: 2011-07-19
category: Technology
tags:
  - best practices
  - Frontend Development
  - Javascript
  - jQuery
  - Tech Blog
---

I'm always on the look out for ways to improve my front end development skills. I usually have to sift through heavily opinionated articles to find anything useful. [Addy Osmani](http://twitter.com/addyosmani) recently posted up a slide show with some really great performance tips. He has a bunch of great articles and I've learned a lot from them. You can check out the slides [here](http://addyosmani.com/jqprovenperformance/). I'd highly highly encourage you to go through all the slides a couple times. Here are a couple of things that I took away that I now use all the time.

1. Always use the latest version of jQuery

   - Newer versions of jQuery have significant performance improvements.

   - I've usually only thought to upgrade to get new features.

2. Use ID and tag selectors whenever you can.

   - getElementById and getElementByTagName are native javascript. The further you get away from native javascript, the slower it will perform.

   - I steered away from using IDs and only used class selectors for a long time. I plan on fixing that.

3. Understand parent and children selectors.

   - I use to use $('.blah', '.wrapper') all the time. I now know that this is a much better option:

```
var list = document.getElementById('list');
var $test = $(list).find('.test');
```

[Here](http://jsperf.com/jquery-selectors-context/2) is where you can check out the performance of this.

4. Use raw javascript

   - Ever do this?

```
$('a').click(function(){
     var url = $(this).attr('href');
});
```

This is much faster

```
$('a').click(function(){
var url = this.href;
});
```

    *

Check out a performance test [here](http://jsperf.com/el-attr-id-vs-el-id/2) to see that using raw javascript is significantly faster that using jQuery for attributes.

5. Event delegation

   - Another item where I've done what's easier to code than what is better for performance.

```
$('#nav a').live('click', function(e) {
 e.preventDefault();
});
```

is slower than

```
$('#nav').delegate('a', 'click', function(e) {
e.preventDefault();
});
```

They both do the same thing.
