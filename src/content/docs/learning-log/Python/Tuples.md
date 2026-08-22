---
title: Tuples
date: 2026-08-19
tags:
  - python
---
Immutable and Ordered

```python
host_port =("127.0.0.0", 3000)
red_rgb = (255, 0, 0)

tuple_single_value = ("only-value",) # To create a single-item tuple, add a trailing coma 

print(type(host_port))
print(f"Host: {host_port[0]}")
print(red_rgb[-2:])

host_port[0] = "192.168.1.1" # Raises an Error
```

