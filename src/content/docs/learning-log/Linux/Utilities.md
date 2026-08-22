---
title: Linux Utilities
date: 2026-08-14
tags:
  - linux
---
`wc` is a utility for counting words, newlines, bytes.
Commonly we use it for counting lines.

`wc -l` will count how many lines (`-l` argument) 

`sort` will sort the output in alphabetical order 

`uniq` limits the occurences of the same record to only one



`less` file pager 
`head` to show the first 10 lies
`tail` to show the last 10 lines 
`-n` to specify 

`cat` dumps text file contents on screen
`-A` shows all non-printable characters
`-b` numbers lines
`-s` supresses repeated lines 

`tac` Shows the text order inverted



`sort:` (Ordering Output)
* `n` -> Sorts numerically rather than alphabetically 
* `r` -> Reverses the sort order
* `k` -> Sorts based on a specific column or key
```shell
sort -t: -k3n /etc/passwd
```

`cut` (Extracting Columns)
* `d` -> Specifies the delimiter. The character that separates the columns
* `f` -> Specifies the field (column) number you want
```bash
cut -d: -f 1 /etc/passwd 
```

`tr` (Translating Characters)
* `d` -> Deletes the specified characters entirely 
* `s` -> Squeezes repeating characters into a single character
* echo hello | tr \[:lower] \[:upper]

`grep` 
```bash
grep [opciones] 'patron_a_buscar' archivo.txt
``` 
* `i` Ignore case
* `v` Invert match 
* `r` `R` Recursive 
* `n` Line number 
* `E` Extended regex
* `B5` Shows the line but also the five in front of it

Text where anna is only at the begining of the word
```bash
grep ^anna /etc/password
```

Shows all lines that end with ash
```bash
grep ash$ /etc/passwd
``` 

`.` Wildcard (Matches any single character)
[abc] Matches a, b, c
`?` 0 o 1
`+` 1 o +
`*` 0 to infinite
`\{2\}` Matches exactly two of the previous character
`\{1,3\}` Matches a minimum of one or a maximum of three of the previous character
`colou?r` Matches zero or one of the previous character
`(...)` Used to group multiple characters so that the regular expression can be applied to the group
`\b` end word 


`awk` -> Tool specialized in data extraction and reporting 

By default, `awk` has a built-in rule: **it treats any contiguous sequence of whitespace (spaces and/or tabs) as a single separator.**

`$1`, `$2`, etc. -> Specific fields (columns).


Examples:

```bash
awk 'pattern { action }' file
```

```bash
awk -F : `{print $4}
```

`$NF` -> The number of fields (The last column)
`-F` -> Changes the separator

 ```bash
 awk -F ':' '/bash/ {print $1}' /etc/passwd
 ``` 

 ### Sed -> Stream editor, used to search and transform text 
It can be used to search for text, and perform an operation on matching text 

```bash
sed 's/texto_a_buscar/texto_nuevo/flags' archivo.txt
```

flags:
`g` -> Global substitute 

Elimina la segunda línea:
```bash
sed -i -e '2d' regexes 
```


Imprimir la quinta línea 
```bash
sed -n '5p' archivo.txt
```

