---
layout: post
title: "Get MD5 Hash of Big Files"
date: 2013-10-07 10:16
comments: true
categories: md5 python hash
---
Recently I have been dealing with files and I need to get md5 hash of all kinds of files;Some are small and some are big.  
For the small files I use this method to get md5 hash value.
```python
def getFileMd5(filename):
    file = open(filename, 'rb') 
    m = md5()
    m.update(file.read())
    file.close()
    result =  m.hexdigest()
    return result
```
However for calculating md5 hash value of big files,the above method will be very Less Efficient.For Big files I use the following method(It's acquired from stackoverflow)
```python
def getBigFileMd5(filename, block_size=2**20):
    f = open(filename, 'rb')
    m = md5()
    while True:
        data = f.read(block_size)
        if not data:
            break
        m.update(data)
    f.close()
    return m.hexdigest()
```
And I did a test.The cost of Getting md5 hash of a Big file(size:10.7 GiB; 11,455,512,109 bytes) is 213.447s.And I think it's OK.
