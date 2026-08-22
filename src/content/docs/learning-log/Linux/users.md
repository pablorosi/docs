---
title: Linux Users
date: 2026-08-16
tags:
  - linux
---
## Root User 

UID 0 -> Root

The root user can be activated or not

sudo is a more secure mechanism to perform administrative tasks

To open a root shell `sudo -i` 
`sudo sh -c "command"`


behind sudo is the etc/sudoers configuration file 
Never edit this file directly always use the visudo command 

Users that are a member of the group wheel get full sudo access
`%wheel ALL=(ALL) ALL`
`usermod -aG wheel myuser`

```bash
WHO    WHERE = (AS_WHOM)    [TAGS:] COMMANDS
```



