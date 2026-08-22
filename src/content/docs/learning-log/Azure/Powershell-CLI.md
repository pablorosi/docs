---
title: Powershell and CLI
date: 2026-08-06
tags:
  - azure
---
### IaC benefits
* Reduce errors in repetitive tacks 
*  Version control 

### Bash 

```bash
az <service> <verb> 
```

Examples.

```bash
az vm list 


```

### Powershell

Powershell accepts CLI commands

```powershell
<Verb>Az<Service>
```

Examples:

```powershell
New-AzVM
Remove-AzVm
Get-AzVm
``` 

Helper:

```powerShell
Get-Command *AzVM*
```


### Install 

* Azure CLI 

A executable program. Native choice for Linux, Mac and Bash enviroments

* Azure PowerShell / Az Module

The Az module is a code library (package) specifically written for the PowerShell environments. Native choice for Windows enviroments.




