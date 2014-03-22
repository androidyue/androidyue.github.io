---
layout: post
title: "How To Create Facebook Key Hash"
date: 2013-11-26 19:15
comments: true
categories: 
---
When I create a new application on Facebook, I meet the problem. Facebook asks me to provide the Key Hash. But it does not show the guidance about how to generate. After Googling, I have found this works for me.  
Before executing the following command, you need install openssl 
```bash
keytool -exportcert -alias your-alias-value -keystore your-keystore-path | openssl  sha1 -binary | openssl  base64
```
Replace **your-alias-value** and **your-keystore-path**  with the real data.

