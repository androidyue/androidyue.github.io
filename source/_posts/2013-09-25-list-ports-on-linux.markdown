---
layout: post
title: "List  Ports on Linux"
date: 2013-09-25 19:01
comments: true
categories: netstat linux pid udp tcp
---
I have often suffered this painful thing.When I start a service but the destination port is always used.So I should list all open ports and kill the occupied application.  
So This is a short tip for how to list open ports on Linux  
```bash
sudo netstat -tulpn
```
Note sometimes you should grant the command for a enough access.  
For a better understanding,please
```bash
man netstat
```
or navigate to http://linux.about.com/od/commands/l/blcmdl8_netstat.htm
