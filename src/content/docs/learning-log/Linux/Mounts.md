---
title: Linux Mounts
date: 2026-08-13
tags:
  - linux
---
In the process of mounting, a device is connected to a specific directory, such that after a successful mount, this directory gives access to the devices contents.

It is common to organize Linux file systems in different devices. Some directories are commonly mounted on dedicated devices:

`/boot` 
`/boot/EFI`
`/var` 
`/home` 
`/usr` 

The `mount` command gives an overview of all mounted devices

`df -Th` command was designed to show available disk space on mounted devices.
When you use the df command the sizes are reported in kibibytes, the -m will display these sizes in mebibytes and -h in a human readable format.

`findmnt` shows mounts and the relationship that exists between the different mounts  

`lsblk` lists all block devices (storage devices) and the directory which they are mounted 
`blkid` 


```bash
mount /dev/devicename /directory /mnt
```

