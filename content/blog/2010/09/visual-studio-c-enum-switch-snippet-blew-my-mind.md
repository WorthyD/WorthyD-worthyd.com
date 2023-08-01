---
title: Visual Studio C# Enum Switch Snippet - Blew My Mind
cover:
coverAlt: ''
description: ''
datePublished: 2010-09-16
dateModified: 2010-09-16
category:
tags:
  - Code Snippets
  - visual studio
  - Tech Blog
  - Quick Code Tips
---

So I learned something TOTALLY COOL from a coworker today! I'm always excited about learning something new when it comes to coding.

I've frequently been in the situation where I've wanted to create a Switch statement while using `enums`.

So to start everything off create a generic class with an enum like this:

```
    public class GenericClass {
        public enum ManyEnums {
            Foo, Bar, Huuuurk, Blah, FourtyTwo
        }

        public void DoSomething(ManyEnums i) {

        }
    }
```

Inside of `DoSomething` type `switch` and then press `tab`. Something cool like this should automatically be generated:[![alt](http://blog.worthyd.com/wp-content/uploads/2010/09/Snippet1.png)](http://blog.worthyd.com/wp-content/uploads/2010/09/Snippet1.png)

While `switch_on` is highlighted, type `i` then press the down arrow. This should appear:
[![alt](http://blog.worthyd.com/wp-content/uploads/2010/09/Snippet2.png)](http://blog.worthyd.com/wp-content/uploads/2010/09/Snippet2.png)

Blew my **MIND!** So much I skipped my lunch to do this blog post before I left work.

I was aware that a similar snippet existed in VB for property creation. It's pretty awesome getting to learn something new with something you've been using for a really long time!

If you are aware of any other useful snippets that are built into VisualStudio, shoot them my way so I can share them!
