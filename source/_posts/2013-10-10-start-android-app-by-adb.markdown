---
layout: post
title: "Start An Android App by ADB"
date: 2013-10-10 19:04
comments: true
categories: adb android app shell
---
To be more geek,I began to start an Android App by using adb.Thanks to Google,It's possible and powerful.
The tool we use to make it is ADB(Android Debug Tool),For more detailed use please visit http://developer.android.com/tools/help/adb.html#shellcommands
Actually What I use here is 
```bash
start [options] <INTENT>
```
An example is followed.
```bash
#Here I want to start MxBrowser app by using ADB
17:04:30-androidyue/tmp$ adb shell am start -n com.mx.browser/com.mx.browser.MxBrowserActivity
Starting: Intent { cmp=com.mx.browser/.MxBrowserActivity  }
Warning: Activity not started, its current task has been brought to the front
```
the Package name(com.mx.browser) before the slash is provided to determine which app should the intent delivered to.The com.mx.browser.MxBrowserActivity is the destination Activity.  
For more explanations about ADB INTENT,please visit http://developer.android.com/tools/help/adb.html#IntentSpec
