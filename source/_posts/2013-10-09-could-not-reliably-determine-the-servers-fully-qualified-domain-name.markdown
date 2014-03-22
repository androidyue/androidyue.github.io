---
layout: post
title: "Could Not Reliably Determine the Server's Fully Qualified Domain Name"
date: 2013-10-09 12:50
comments: true
categories: httpd apache 
---
An easy trick to solve problem:Could not reliably determine the server's fully qualified domain name  
Let's take Linux for example.  
```bash
#Modify your configuration file.
12:52:21-androidyue/etc/httpd/conf$ sudo vim httpd.conf 
```
Find out the following sentence
```bash
#
# ServerName gives the name and port that the server uses to identify itself.
# This can often be determined automatically, but we recommend you specify
# it explicitly to prevent problems during startup.
#
# If this is not set to valid DNS name for your host, server-generated
# redirections will not work.  See also the UseCanonicalName directive.
#
# If your host doesn't have a registered DNS name, enter its IP address here.
# You will have to access it by its address anyway, and this will make 
# redirections work in a sensible way.
#
#ServerName localhost:80
```
If the ServerName localhost:80 has been commented,it may cause above problem.A simple trick is just uncomment the sentence.Let it be like this 
```bash
ServerName localhost:80
```
Hope you could resolve your problem,Guys.
