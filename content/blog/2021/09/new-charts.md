---
title: Angular Web Workers
date: 2021-09-26T11:39:35.377Z
slug: angular-web-workers
category: Technology
tags:
  - destiny-clan-dashboard
---

We currently run about 2000 web requests on a clean load.  The app lightly locks up while it's pulling all this information and I really wanted to implement Web Workers into the project to try to offload processing to another processing thread.

There are very few resources to implement web workers into an angular application.  I found all the examples to add web workers to the project, but injecting Angular Services into the web worker can't be found anywhere.  I did find a really good library for handling observables with web workers.  

I have written a library that handles all the Bungie requests.  I couldn't use these because they are so tight into the Angular framework.  

Here is how I implemented them.



You can checkout my project at [https://destinyclandashboard.com/](https://destinyclandashboard.com/) or checkout my source code at [https://github.com/WorthyD/d2-clandashboard](https://github.com/WorthyD/d2-clandashboard)