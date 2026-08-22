---
title: Linux Links
date: 2026-08-13
tags:
  - linux
---
![](_assets/Links.excalidraw.dark.svg)


To create a hard link:
```bash
ln host hard 
``` 

`ln -i` Shows the inode number 

* Hard links are not allowed to refer to directories

To create a symbolic link:
```bash
ln -s hard soft
``` 

* To create symbolic links the best practice is to use the absolute path name, to be able to move it.

 
