---
layout: post
title: "Install Git Daemon on Fedora"
date: 2013-09-10 19:45
comments: true
categories: Fedora git Daemon 
---

Git-daemon is  A really simple server for git repositories.You can take a detailed understanding by reading https://www.kernel.org/pub/software/scm/git/docs/git-daemon.html .  
I once often used git-daemon when I was using Ubuntu.But when I turn to Fedora and found it was not installed.And the output is like the following.
```bash
git: 'daemon' is not a git command. See 'git --help'. 
```
So I write this post to record How to install and enable git-daemon 
First Let's intall the git Daemon:
```bash
sudo yum install git-daemon
```
However git daemon is off by default.We should enable it.We should do as the following.
```bash
vim  /etc/xinetd.d/git
```
And modify the file as the following configuration.
    # default: off
    # description: The git dæmon allows git repositories to be exported using \
            #       the git:// protocol.

    service git
    {
                disable         = no
                socket_type     = stream
                wait            = no
                user            = nobody
                server          = /usr/libexec/git-core/git-daemon
                server_args     = --base-path=/var/lib/git --export-all --user-path=public_git --syslog --inetd --verbose
                log_on_failure  += USERID
                # xinetd does not enable IPv6 by default
                flags           = IPv6

    }

And then,We use this command to start the git Daemon
```bash
git  daemon--export-all--base-path=your_local_git_path
```
Mostly we could clone the repositories from the git daemon.  
But if  you have enabled Firewall and other people want to clone the repository from your git daemon,please let the port 9418 available to the outsite.
