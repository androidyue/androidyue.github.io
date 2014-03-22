---
layout: post
title: "ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)"
date: 2013-09-17 18:48
comments: true
categories: MySQL Linux mysqld
---
This works for me.
```bash
sudo systemctl start mysqld.service 
sudo systemctl enable mysqld.service
```
