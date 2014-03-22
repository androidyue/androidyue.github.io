---
layout: post
title: "Fix No Sound Issue On Mac"
date: 2014-02-16 13:25
comments: true
categories: Mac sound
---
Now I am dealing with Mac OSX. However I found sometimes this is no sound. People say it's a bug. I have tried some methods. And found this goes for me every time. 
```bash
#!/bin/bash
sudo kextunload /System/Library/Extensions/AppleHDA.kext
sudo kextload /System/Library/Extensions/AppleHDA.kext
```
Put the code into a shell script and run the script whenever the issue occurs.
