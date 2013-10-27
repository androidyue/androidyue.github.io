---
layout: post
title: "How To Share Git Tag"
date: 2013-10-25 19:00
comments: true
categories: git tag
---
Now I have two tags under my git repository. Let's take a look at how to push the git tags to Server.
```bash
v2850
v4.1.1.2000_2852
```
###Push a single tag to the server
```bash
#git push origin tag_name
#Take v2850 for example
git push  origin v2850 
```

###Push all tags to the server
```bash
git push  origin --tags
```
