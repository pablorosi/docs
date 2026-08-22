---
title: Vim
date: 2026-08-12
tags:
  - linux
---
`Esc` -> Switches from input mode to command mode

`i` --> Switches command mode to input mode, at the cursor position 
`a` -> Switches command to input mode after the cursor position 

`o` -> Opens a new line below the current cursor and goes to input mode

`wq` -> Writes and quits

`:q!` -> Quits the file without applying any changes. The ! is to force the command 

`:w filename` -> Writes the current file with a new filename 

`dd` -> Deletes the current line and places the contents of the deleted line into memory 

`yy` -> Copies the current line 

`p` -> pastes the contents that hace been cut or copied into memory 

`v` -> Enter visual mode, which allows you to select a block of text using the arrow keys. `d`to cut the selection or `y` to copy it.

`u`-> Undoes the last command. Repeat as often as necesary.

`Ctrl-R` -> Undoes the last undo. Cannot be repeated more than once.

`gg` -> Goes to the first line in the document 

`G` -> Goes to the last line in the document

`/TEXT` -> Searches for text from the current cursor position forward

`?text` -> Searches for text from the current cursor position back-ward 

`^` -> Goes to the first position in the current line

`$` -> Goes to the last position in the current line 

`!ls` -> Adds the output of ls (or any other command) in the current file.

`:%s/old/new/g` -> Replaces all occurrences of old with new


