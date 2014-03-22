---
layout: post
title: "BashBites:Loop Through In A Directory"
date: 2013-12-28 10:12
comments: true
categories: Linux Shell for loop  bash
---
The trick is really easy. Just to keep record.Here we take the /tmp folder as the desired one.
```bash
#!/bin/bash 
cd /tmp
for file in `ls`
do
    echo $file
done
```
