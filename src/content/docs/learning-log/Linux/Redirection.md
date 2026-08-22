---
title: I/O Redirection
date: 2026-08-12
tags:
  - linux
---
STDIN 
* Computer keyboard
* < (same as 0<)
* 0
STDOUT
+ Computer monitor 
+ > (same as 1>)
+ 1
If redirection is to a file, when doing >, the current contents of that file are overwritten. When doing >> the output is appended to that file.

STDERR -> Errors
* Computer monitor 
* 2> 
* 2
2>&1 , &> redirects STDERR to the same destination as STDOUT.
