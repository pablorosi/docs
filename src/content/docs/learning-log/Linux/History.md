---
title: Linux Templates
date: 2026-08-12
tags:
  - linux
---
Bash is configured by default to keep the last 1000 commands a user used.
The name of this file is `.bash_history`, and it is created in the home directory

```bash
history
```

Press `Ctrl-R` to open the prompt to do backward searches
Type `!number` to execute a command with a specific number from history
Use `history -d number`to delete a specific command 
Type `!sometext` to execute the last command that starts with sometext

 
Bash uses two main environment variables to control how many commands it remembers:
- **`HISTSIZE`**: The number of commands kept in the active memory for your current session.
- **`HISTFILESIZE`**: The number of commands saved permanently in your `~/.bash_history` file on disk.

You can edit this variables in the `~/.bashrc` file.

`history -c` -> Wipes the history from the active RAM of your current session.
`history -w` -> Writes the current active history directly into the `~/.bash_history` file, overwriting all previous records.

To prevent a command from being saved to history you can configure the `HISTCONTROL`  variable.  
For example:
Add `export HISTCONTROL=ignorespace` to your `~/.bashrc`. After applying it, any command you type that starts with a leading space (e.g., `mysql -u root -pPassword`) will completely bypass the history file.

