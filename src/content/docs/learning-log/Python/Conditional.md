---
title: Conditionals
date: 2026-08-20
tags:
  - python
---
```python
if <condition>:
	print ('Condition is true.')
	
print('Script continues...')

if <condition>:
	print('Condition is true')
else: 
	print('Condition is false')

print('Script continues') 
```

`if not value` 

Falsy values 
* False
* None
* 0
* Empty secuences

Truthy values 
* True
* Most other values

```python
http_status = 404

if http_status = 200:
	print("Status OK")
elif http_status = 404:
	print("Resource not found")
elif http_status = 500:
	print("Server error (5xx)")
else:
	print("Another status:", http_status)
``` 


```python
elif not isinstance(data list): 
	print("Invalid value for 'data'. Please provide a list")
```

 