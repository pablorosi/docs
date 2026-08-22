---
title: Linux Variables
date: 2026-08-12
tags:
  - azure
---
When a user logs in, an environment is created for that user automatically. This happens based on the following four configurations files:

+ `/etc/profile ` -> Generic file that is processed by all users upon login. For a login shell only 
+ `/etc/bashrc` -> This file is processed when subshells are started. For any shell
+ `~/.bash_profile` -> User-specific login shell variables can be defined
+ `~/.bashrc` -> Subshell variables are defined
+ `~/.bash_logout` -> Commands to execute anytime when you log out.

To update and apply `source .bashrc` 

You shouldn't edit this files directly. On Linux, may configuration files are used like for example for `/etc/profile` there is a `/etc/profile.d` 
This approach ensures that if the default configuration files are updated as well during a system update you'll never lose your changes.

Login shell -> First shell that is opened for a user after the user has logged in


To display messages during the login process, Bash uses the `/etc/motd` and the `/etc/issue` files.
Messages in `/etc/motd` display after a user has successfully logged in to a shell.


if you put `color=blue` only applies in that subshell
`export color=blue` 

