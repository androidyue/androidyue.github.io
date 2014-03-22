---
layout: post
title: "javac:command not found"
date: 2013-09-27 22:31
comments: true
categories: javac java openjdk fedora
---
I have been getting well on with my java tool.However When I use the javac command.It says 
```bash
javac : command not found
```
It's just because I just only install the JRE(Java Runtime Environment) and do not install JDK(Java Development KIt).I got the answer going for my fedora
```bash
sudo yum install java-devel
```
