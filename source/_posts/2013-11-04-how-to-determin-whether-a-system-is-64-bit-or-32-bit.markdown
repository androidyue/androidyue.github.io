---
layout: post
title: "How To Determin Whether A System is 64-bit or 32-bit"
date: 2013-11-04 16:01
comments: true
categories: linux 32-bit 64-bit OS
---
A trick in Bash
```bash 
#!/bin/bash
system_bits=`uname -m`
if [[ "$system_bits" == x86_64  ]]
then
    echo "It's a 64-bit system"
else
    echo "It's a 32-bit system"
fi

```
