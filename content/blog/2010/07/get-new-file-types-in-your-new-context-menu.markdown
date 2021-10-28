---
author: worthyd
comments: true
date: 2010-07-27 02:37:36+00:00
layout: post
link: http://worthyd.com/blog/2010/07/get-new-file-types-in-your-new-context-menu/
slug: get-new-file-types-in-your-new-context-menu
title: Get New File Types in Your "New" Context Menu
wordpress_id: 38
category: Technology
tags:
- Quick OS Tips and Tricks
---

The "New" menu on the windows context menu has always annoyed me. It seems that every software suite adds something new and ridiculous to it.  I think I got five or six new items after installing CS4 and Office 2010.  I've frequently been in the situation where I could use a quick .html, .css or .js file on the fly.
<!-- more -->
There is a quick and easy way to remove and add new items to this menu.  First off, it's never a bad idea to back up your registry before trying this.  Second, create two .reg files. Create one for removing and one for adding.

Example:
`
Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT.bmpShellNew]
[-HKEY_CLASSES_ROOT.contactShellNew]
[-HKEY_CLASSES_ROOT.docxWord.Document.12ShellNew]
[-HKEY_CLASSES_ROOT.pubPublisher.Document.14ShellNew]
[-HKEY_CLASSES_ROOT.asShellNew]
[-HKEY_CLASSES_ROOT.flaShellNew]
[-HKEY_CLASSES_ROOT.xlsxExcel.Sheet.12ShellNew]
`

Most of the time you'll use the file extension followed by ShellNew.  Office Applications often have an additional folder.  You may need to hop into the registry to manually do it.

I plugged in following this morning.
`
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT.jsShellNew]
"NullFile"=""
[HKEY_CLASSES_ROOT.cssShellNew]
"NullFile"=""
[HKEY_CLASSES_ROOT.htmlShellNew]
"NullFile"=""
[HKEY_CLASSES_ROOT.phpShellNew]
"NullFile"=""
[HKEY_CLASSES_ROOT.batShellNew]
"NullFile"=""
`

And I got this result:
[![My Context Menu](http://blog.worthyd.com/wp-content/uploads/2010/07/Untitled-22.jpg)](http://blog.worthyd.com/wp-content/uploads/2010/07/Untitled-22.jpg)

I hope you find this as useful as I did!
