---
layout: post
title: "Fix missing command takes too long to respond in Fedora"
date: 2013-12-28 21:51
comments: true
categories: fedora linux bash
---
I am getting well on with Fedora now. However when I was a fresher to Fedora, I have met a lot of problems.   
One of them is that When I type some wrong commands It will take too long to respond. It's totally different from Ubuntu,which I used before. However I like it could quickly reponse even through the command does not exist. 
```bash
unset command_not_found_handle
```
Ok.Add the above code to .bashrc And it works.

