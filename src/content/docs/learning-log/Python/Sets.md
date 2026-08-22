---
title: Sets
date: 2026-08-19
tags:
  - python
---
Sets are mutable but every element inside it must be inmutable. A python set is implemented a as a Hash Table. To archive 0(1) lookup times, python runs a has function on every item.
We can have a set of tuples, but we can't have a set of lists as they are mutable

Sets delete automatically duplicate items

```python
ports = set([80, 443, 22, 80, 8080, 443])
native_set_construction = {"web01", "web02"}
print(unique_ports)
print(22 in unique_ports)

unique_ports.add(3000)
print(unique_ports)
unique_ports.remove(22) # Throws a KeyError if the item is not in the set
unique_ports.discard(22) # Does not throw an Error if the item is not in the set

set_of_tuples = {(1,2), (3,4)}
print{(1,2) in set_of_tuples}
```

```python
developers = set(["alice", "blob", "charlie"])
admins = sets(["alice", "david"])

print("Union:", developers.union(admins))
print("Intersection:", developers.intersection(admins))
print("Difference:", developers.difference(admins))
print("Union:", developers | admins)
print("Intersection:", developers & admins)
print("Difference:", developers - admins)
``` 


## Differences Lists Tuples and Sets
###  Lists
* `servers = ['web01', 'db01', 'web01']` 
* Ordered
* Mutable 
* Allow duplicate items

### Tuples
* `redis_cfg = ('10.0.5.1', 6379)` 
* Ordered
* Inmutable
* Allows duplicate items

### Sets
* `allowed_ports = {22, 80, 443}
* Unordered
* Mutable
* Does not allows duplicates




