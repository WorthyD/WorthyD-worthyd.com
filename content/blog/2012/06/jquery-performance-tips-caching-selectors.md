---
title: 'jQuery Performance Tips: Caching Selectors'
cover: 
coverAlt: ""
description: ""
datePublished: 2012-06-21  
dateModified: 2012-06-21 
category: Technology
tags:
- best practices
- front end performance
- jQuery
- Tech Blog
- Frontend Development
---

Selector Caching is the number one thing I have learned for jQuery performance.  I've seen it in countless numbers of blog posts, tweets and conference lectures.  It's a real simple concept too.  [John Resig](http://ejohn.org/) wrote about Twitter's problem a couple years ago [here](http://ejohn.org/blog/learning-from-twitter/). 
<!-- more -->
Caching jQuery selectors can be better explained to backend developers if you think of your HTML as a database and your selector as a database query.  You can run to the database multiple times and execute GetUserByUserId as many times as you want, but the larger the database (or  web page) the slower the query will execute and the longer it takes for the request to process.  You can do it, but that doesn't mean it's a good idea.  Get your user once, put all that information into a class and don't call the database again. This logic  can be re-purposed for jQuery selectors.  Get what you need, and store it in a variable.

Example:
[code lang="js"]
	$('#btnSubmit').on('click', function(){
		if($('#txtName').val() == ''){
			$('#txtName').css('border', '1px solid red');
			alert('Name is required');
			return false;
		}
		
		var data = {
			Name: $('#txtName').val()
		}
		$.post('/url', data, function(result){
			alert('Success!')
		});
		
	});
[/code]

The above code isn't bad, but there is definitely room for improvement.  We can dump our txtName object into a variable so that we don't have to query the DOM every time we need it.  This will also protect you from any accidental misspellings in later uses.  You could end up putting $('#txtname') somewhere and it would break our code because there isn't an DOM element with an id of 'txtname'. This wouldn't cause any JavaScript errors and we most likely wouldn't notice it because jQuery wont throw errors on selectors that don't find elements.

Above code with Cached Selectors:
[code lang="js"]
	$('#btnSubmit').on('click', function(){
		var txtName = $('#txtName');
		if(txtName.val() == ''){
			txtName.css('border', '1px solid red');
			alert('Name is required');
			return false;
		}
		
		var data = {
			Name: txtName.val()
		}
		$.post('/url', data, function(result){
			alert('Success!')
		});
		
	});
[/code]

There are still plenty of things we can do to clean up the above code, but the important part is that we are now using cached selectors.  It's really easy to do and will help out a lot in your web application's front end performance.
