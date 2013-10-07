---
layout: post
title: "How to Create a .db File in Python with Sqlite3"
date: 2013-10-07 09:35
comments: true
categories: .db sqlite3 python 
---
How to create a .db file in Python with sqlite3?Actually It's really easy.  
Run the following code  
```python
import sqlite3
sqlite3.connect('./test.db')
```
After running the above code,the test.db file will be created if it does not exist.  
Of course,you have the proper permission to create the file.

