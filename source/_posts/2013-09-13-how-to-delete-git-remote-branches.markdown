---
layout: post
title: "How to Delete Git Remote Branches"
date: 2013-09-13 18:45
comments: true
categories: git branch remote 
---
It's easy to remove a certain remote branch in a Git respository.
You could try this 
```bash
git push origin --delete <branchName>
```
And of course another short command is waiting for You
```bash
git push origin :<branchName>
```
