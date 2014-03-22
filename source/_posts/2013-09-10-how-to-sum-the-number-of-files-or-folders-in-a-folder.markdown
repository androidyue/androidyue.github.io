---
layout: post
title: "How To Sum the Number of Files or Folders in a Folder"
date: 2013-09-10 20:49
comments: true
categories: linux wc 
---

I once had a request to sum the number of files in a specific folder.After googling I found the command wc could help me out.  
wc - print newline, word, and byte counts for each file.  And I think wc is short for Word Count.Please have a detailed information by visiting http://linux.about.com/library/cmd/blcmdl1_wc.htm  if you have the desire.  
Ok,Let' get the total number of files(including folders) in a specific folder  
```bash
20:56:08-androidyue/tmp$ ls | wc
```
Well,the following command will sum the number of pure files(Not including folders)  
```bash
20:58:27-androidyue/tmp$ ll | grep ^- | wc
```
However how to sum the number of pure folder?The following command will help.
```bash
21:00:20-androidyue/tmp$ ll | grep ^d | wc
```
