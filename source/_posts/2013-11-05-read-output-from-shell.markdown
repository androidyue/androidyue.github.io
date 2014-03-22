---
layout: post
title: "Read Output From Shell"
date: 2013-11-05 12:38
comments: true
categories: python linux shell subprocess pipe stdout command  
---
Python provides a lot of method to read output from a just executed shell. However many of them has been deprecated(Not recommened). But subprocess works at present compared to other methods.
```python 
from subprocess import Popen,PIPE,STDOUT
 
def readFromCommand(command) :
    p = Popen(command, shell=True, stdin=PIPE, stdout=PIPE, stderr=STDOUT, close_fds=True)
    result = p.stdout.read().strip()
    return result
    
print readFromCommand('ls')
#result
#0001-.patch
#0001-.patch.zip
#0001-Replace-app_name-into-Browser.patch
```
A detailed description about subprocess has been written down here. http://docs.python.org/2/library/subprocess.html
