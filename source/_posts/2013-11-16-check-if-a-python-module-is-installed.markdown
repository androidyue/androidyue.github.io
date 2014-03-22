---
layout: post
title: "Check If A Python Module Is Installed"
date: 2013-11-16 20:14
comments: true
categories: Python Linux Bash module
---
I was once stucked in How to check Whether a Python module has been installed or not. After Googling, I found this trick.  
Python allows user to pass command from out of a python file.See here  
```bash
-c cmd : program passed in as string (terminates option list)
```
The result if we import an installed module 
```bash
20:15:45-androidyue~/osc_git/LnxClient (master)$ python -c "import os"
20:31:24-androidyue~/osc_git/LnxClient (master)$ echo $?
0
#0 means the module has been installed
```
Now if we import an module which is not installed. 
```bash
20:31:41-androidyue~/osc_git/LnxClient (master)$ python -c "import aaa"
Traceback (most recent call last):
File "<string>", line 1, in <module>
ImportError: No module named aaa
20:31:46-androidyue~/osc_git/LnxClient (master)$ echo $?
1
#1 means that module is not installed.
```
