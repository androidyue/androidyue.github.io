---
layout: post
title: "Install Flash Plugin on Fedora 17"
date: 2013-09-07 17:05
comments: true
categories: Flash Chrome Fedora 
---

#####Addings
```bash
    #For 32-bit System:
    sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
    #For 64-bit System 
    sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-x86_64-1.0-1.noarch.rpm
   
    sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
```
#####Updatings
```bash
    sudo yum update
```
#####Installings
```bash
    sudo yum install flash-plugin nspluginwrapper alsa-plugins-pulseaudio libcurl
```

