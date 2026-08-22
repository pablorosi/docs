---
title: Find Help in Linux
date: 2026-08-13
tags:
  - linux
---
The quickest way is using `--help` 
You can also use man `man ls`
You can search in the man database with `man -k` 

Man pages are categorized in different sections.
The most relevant sections for system administrators are as follows:

* 1: Executable programs or shell commands
* 5: File formats and conventions 
* 8: System administration commands
For example if your are looking for the command that an administrator would use to to create partitions, use `man -k partition | grep 8` 

`man -f (command)` Displays a short description of the item found

To update the mandb database run:
`mandb` 

`man -w ls` Returns the location of the file where the page is rendered

Since RHEL 10 there is a new way to get help RHEL Lightspeed powered by AI.
This tool won't help in the RHCSA exam as you are offline 

2 types of commands:

- Internal command, also called shell builtin, is a command that is a part of the shell itself and doesn't have to be loaded from disk separately
- External command, exist in a executable file on the disk of the computer. Because it has to be read from disk the first time it is used, it is a bit slower.

To find out whether a command is a Bash internal or an executable file on disk, you can use the `type` command 

The $PATH variable defines a list of directories that the shell searches for a matching filename
You can also use which, `which ls`, to find out where the shell will get the ls command 


