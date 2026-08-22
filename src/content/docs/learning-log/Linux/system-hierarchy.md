---
title: Linux System Hierarchy
date: 2026-08-13
tags:
  - linux
---
`/` Specifies the root directory
`/boot` Contains all the files and directories that are needed to boot the Linux kernel
`/dev` Contains device files that are used for accessing physical devices.
`/etc` Contains configuration files that are used by programs and services on your server
`/home` Used for local home directories 
`/media, /mnt` Contain directories that are used for mounting devices in the file system tree
`/proc` Used by the proc file system. This is a file system structure that gives access to kernel information 
`/root` Specifies the home directory of the root user 
`/run` Contains process and user-specific information that has been created since the last boot
`/srv` May be used for data services like NFS, FTP and HTTP 
`/sys` Used as an interface to different hardware devices that are managed by the Linux 
`/tmp` Contains temporary files that may be deleted without any warning during boot 
`/usr` Contains subdirectories with program files, libraries for these program files and documentation about them
`/var` Contains files that may change in size dynamically, such as log files, mail boxes, and spool files 


You can do touch file{1..9} -> To create 9 files 
or rm{1..9}

uname -r -> Returns the current kernel version 

ls -l /lib/modules/$(uname -r)

/etc/profile is the generic bash startup file 
