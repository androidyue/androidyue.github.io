---
layout: post
title: "BashBites:How To Append Outputs To A File"
date: 2013-09-07 19:40
comments: true
categories: bash shell
---

Is there any way to append output(debugging information) to a existings file? As we all know in bash the command '>' will write ouputs to a file.However this command will also erase the existing data it the file.<br/>
Of course bash provides a command that appends outputs to a file.It resembles '>'.It's '>>'<br/> 
The following is a piece of example code.
#####Let's look at > 
```bash
[androidyue@androidyue tmp]$ touch a.txt
[androidyue@androidyue tmp]$ cat a.txt 
[androidyue@androidyue tmp]$ echo "ABC" > a.txt 
[androidyue@androidyue tmp]$ cat a.txt 
ABC
[androidyue@androidyue tmp]$ echo "DEF" > a.txt 
[androidyue@androidyue tmp]$ cat a.txt 
DEF
```

#####Well,Let's look at the exiciting command >>
```bash
[androidyue@androidyue tmp]$ echo "GHI" >> a.txt 
[androidyue@androidyue tmp]$ cat a.txt 
DEF
GHI
```

