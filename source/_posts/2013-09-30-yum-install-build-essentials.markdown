---
layout: post
title: "Yum Install build-essentials"
date: 2013-09-30 18:32
comments: true
categories: yum build-essentials make gcc gdb
---
I was once stucked in installing build-essentials which is for Debian/Ubuntu.I could not find any packages like build-essentials in yum.However this helped me out.
```bash
sudo yum install kernel-devel kernel-headers
```
