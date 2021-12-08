---
author: worthyd
comments: true
date: 2010-12-03 
datePublished: 2010-12-03  
dateModified: 2010-12-03 
publishDate: 2010-12-03  
modifiedDate: 2010-12-03 22:15:59+00:00
layout: post
link: http://worthyd.com/blog/2010/12/manage-scripts-styles/
slug: manage-scripts-styles
title: Easily Manage Many Javascript/CSS Files in Your .Net MVC Project
wordpress_id: 540
category: Technology
tags:
- .net
- C#
- Code Snippets
- Javascript
- mvc
- visual studio
- Tech Blog
- Quick Code Tips
---

I've worked on a few projects where we crammed all of our javascript into one file. This made navigation of the file a sheer nightmare.  Now, I use the [SmallSharpTools.com Packer](http://smallsharptools.com/Projects/Packer/) to cram all of my JS files into a single minified JS file. One of the last MVC project I worked on had 143 javascript files that were minified into a single one.  There is one frustrating thing about this. You must build your project every time you change javascript code. You can also retrofit these methods for CSS files.
<!-- more -->
You can solve this by throwing an if statement around your JS includes like this:


    
    
    <code>
    <% if (!Model.IsDev) {  %>
    	<script src="/Scripts/all.min.js" type="text/javascript"></script>
    <%} else {%>
    	<script src="/Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    	<script src="/Scripts/jquery.validate.min.js" type="text/javascript"></script>
    	<script src="/Scripts/microsoftAjax.min.js" type="text/javascript"></script>
    	<script src="/Scripts/microsoftMvcAjax.js" type="text/javascript"></script>
    	<script src="/Scripts/MicrosoftMVcValidation.js" type="text/javascript"></script>
    <%} %>
    </code>
    



This isn't too bad, but it can still be kinda messy if you are working on a large project.  If you structure you directories to mimic your Views like I do (see image below) it becomes really tedious to manage every file and remember to add new js files to your includes.  

[![](http://blog.worthyd.com/wp-content/uploads/2010/12/MessyScripts2.png)](http://blog.worthyd.com/wp-content/uploads/2010/12/MessyScripts2.png)

I wrote a simple HTML Helper that will help change this:

    
    
    <code>
    <script src="/Scripts2/AllYour/About.js" type="text/javascript"></script>
    <script src="/Scripts2/AllYour/JScript2.js" type="text/javascript"></script>
    <script src="/Scripts2/AllYour/Index.js" type="text/javascript"></script>
    <script src="/Scripts2/BaseAre/ForGreatJustice.js" type="text/javascript"></script>
    <script src="/Scripts2/BaseAre/SomeBodySetUsUpTheBomb.js" type="text/javascript"></script>
    <script src="/Scripts2/BaseAre/JScript1.js" type="text/javascript"></script>
    <script src="/Scripts2/BelongToUs/JScript1.js" type="text/javascript"></script>
    <script src="/Scripts2/BelongToUs/RandomJS.js" type="text/javascript"></script>
    <script src="/Scripts2/BelongToUs/JScript2.js" type="text/javascript"></script>
    </code>
    



Into This:

    
    
    <code>
    <%= Html.IncludeJSDirectory("/Scripts2/AllYour/")%>
    <%= Html.IncludeJSDirectory("/Scripts2/BaseAre/")%>
    <%= Html.IncludeJSDirectory("/Scripts2/BelongToUs/")%>
    </code>
    



Here is the code for the HTML Helper:

    
    
    <code>
    using System.IO;
    using System.Text;
    
    namespace System.Web.Mvc {
    	public static class IncludeHelper {
    
    		public static string IncludeJSDirectory(this HtmlHelper helper, string directory) {
    			DirectoryInfo dir = new DirectoryInfo(HttpContext.Current.Server.MapPath(directory));
    
    			if (!dir.Exists) 
    				return string.Empty;
    
    			StringBuilder sb = new StringBuilder();
    
    			string href = string.Empty;
    			foreach (var i in dir.GetFiles("*.js")) {
    				href = string.Format("{0}{1}", directory, i.Name);
    
    				TagBuilder _script = new TagBuilder("script");
    				_script.MergeAttribute("type", "text/javascript");
    				_script.MergeAttribute("src", href);
    
    				sb.Append(_script);
    			}
    
    			return sb.ToString();
    		}
    	}
    }
    </code>
    



Currently, this doesn't support URLs leading with a tilde. I have a code snippet to handle it, but I didn't write it.  I've been working with this solution for a couple of weeks and it works great on my local machine. It has made working with many Javascript files very easy.  I would strongly recommend not using this for a production environment and to look into [SmallSharpTools.com Packer](http://smallsharptools.com/Projects/Packer/) to minify your javascript and css files.
