---
title: Lists
date: 2026-08-19
tags:
  - python
---
```python
servers = ["web01". "web02", "web03"]
mixed-list = ["config.yaml", 8080, True]

print(servers[0])
print(servers[-1])
print(servers[-2])

#Slicing
print(servers[:2])
print(servers[1:])

#Mutating lists
ports = [80, 443, 8080]
ports.append(5000)
print(ports)
ports.insert(1, 3000)
server.remove(80) #Throws a ValueError if the numbers does not exist in the list.
removed_value = ports.pop(2)
print(removed_value)

def mutate_list(l):
	l.pop()
	
new_list = ["a", "b", "c"]
new_list(new_list)
print(new_list)
```

