---
author: worthyd
comments: true
date: 2012-11-04 11:35:37+00:00
layout: post
link: http://worthyd.com/blog/2012/11/how-to-use-cloud-storage-services-to-sync-saved-games-across-pcs/
slug: how-to-use-cloud-storage-services-to-sync-saved-games-across-pcs
title: How to use cloud storage services to sync saved games across PCs
wordpress_id: 361
category: Quick OS Tips and Tricks
tags:
- batch files
- command line
- video games
- windows 7
- Tech Blog
---

I'm a big fan of playing games over my lunch break.  It is a great way to unwind for an hour or so before.  Minecraft is probably my favorite one to play right now.  I ran into an issue about a year and a half ago when I first started playing Minecraft. I wanted to be able to play my worlds on my home PC in the evenings and play them on my work laptop during lunch.  Many services now, like Steam, offer cloud based game saves.  I had to hunt down a method to do this for games that fell outside of this realm.   I was already using Drop Box for cloud storage and I found a few articles on how to use it to use it for your Minecraft saves.  I wanted to take it to the next level.  You can use a symbolic link to link two folders together and share their contents. You just need to use the mlink command in the command line with the folder paths to create this link.

`mlink /d "target" "source"`

Your target file location must not exist or you will get an error via command line.  I created a batch file that is in my Drop Box folder that I run whenever I hop onto a new PC that I want to play Minecraft on.  I link my entire Minecraft directory so that my mods, texture packs, settings and saves get shared to all my computers.  To get my batch file to work correctly, you will need to remove your .minecraft folder from you app data folder and move it to your Drop Box. 

`mklink /d "%AppData%.minecraft" "%HomePath%DropboxMinecraft" 
pause`

%AppData& and %HomePath% are environment variables. %HomePath% automatically maps to your user directory. EX: C:UsersWorthyD. You can find a list of environment variables [here.](http://www.mydigitallife.info/list-of-windows-and-dos-command-prompt-environment-variables/)  They can be really useful when setting up these link files.

Here are some of the other links I've used.

Elder Scrolls: Oblivion
`mklink /d "%HomePath%DocumentsMy GamesOblivion" "%HomePath%DropboxOblivion Saves" 
pause`

Warcraft 3
`mklink /d "%ProgramFiles(x86)%Warcraft IIIsave" "%HomePath%DropboxWC3 Saves" 
pause`

Remember that you will need to move your original save files to your Drop Box folder before running these commands.

Hope you find this useful. Thanks for reading!
