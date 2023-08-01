---
title: Speed up page speed by lazy loading non-essential elements with jQuery
cover:
coverAlt: ""
description: ""
datePublished: 2011-01-26
dateModified: 2011-01-26
category: Technology
tags:
- Code Snippets
- Javascript
- jQuery
- Tech Blog
- Quick Code Tips
---

I worked up this idea after using some Facebook like buttons and the [jScrollPane](http://jscrollpane.kelvinluck.com/) jQuery plugin.  I'm a big fan of jScrollPane, but the iframes from the like buttons caused some unfortunate page flashing after document.ready fired. Rendering the like buttons with FBML took even longer than the iframe method.

You can use this to delay large images, ads, iframes, or other beefy elements that don't appear "above the fold" and are not essential to the initial presentation of your page.  This can hurt the "SEO" value of content so be mindful of what you use it on.

This snippet will  insert an anchor tag into the selected elements after a 1 second delay and a .5 second delay between each element.  Feel free to use and modify as needed.




```
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    (function ($) {
    	$.fn.addHref = function (options) {

    		var defaults = {
    			primaryTimeout: 1000,
    			individualTimeout: 500
    		};

    		var options = $.extend(defaults, options);

    		//Main Functino
    		var jqFunc = function (obj) {
    			jObj = $(obj);

    			var a = $('<a></a>', {
    				href: "http://google.com",
    				text: "Google"
    			});

    			jObj.append(a);
    		};

    		var mainObject = this;

    		return setTimeout(function () {
    			var currentTimeOut = options.individualTimeout;
    			mainObject.each(function () {
    				var obj = this;
    				currentTimeOut += options.individualTimeout;
    				setTimeout(function () { jqFunc(obj) }, currentTimeOut)
    			});
    		}, options.primaryTimeout);
    	};
    })(jQuery);

    $(function(){
    $('div').addHref();
    });
```

