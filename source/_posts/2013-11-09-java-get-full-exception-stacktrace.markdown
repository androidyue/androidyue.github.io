---
layout: post
title: "Java Get Full Exception StackTrace"
date: 2013-11-09 10:53
comments: true
categories: Java Exception Error Throwable StackTrace Crash
---
As a coder, I am always handling exceptions or errors,or in a word throwables. To impove the release build, I need to collect every throwable information.  
And I need to get the information as string and post it to the Bug Collect Server. Now here is an easy trick to get stacktrace from a Throwable  
```java 
private String getStackTrace(Throwable t) {

    final Writer result = new StringWriter();
    final PrintWriter printWriter = new PrintWriter(result);
    t.printStackTrace(printWriter);
    return result.toString();
}
```
