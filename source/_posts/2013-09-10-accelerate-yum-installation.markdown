---
layout: post
title: "Accelerate Yum Installation"
date: 2013-09-10 21:15
comments: true
categories: yum mirror
---

Yum is a great tool for manage dependencies and easy to use.However actually there is a way to speed up the installation.  
Fastestmirror is a tool that will help yum determin what mirror is fastest and to use.  
To install on Fedora 17
```bash
sudo yum install yum-fastestmirror
```
Of course you could customize the fastestmirror configuration easily
```
sudo vim /etc/yum/pluginconf.d/fastestmirror.conf
```
So when you next install a package from the network,I hope you could feel it much faster.
