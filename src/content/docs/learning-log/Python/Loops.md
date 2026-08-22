---
title: Loops
date: 2026-08-20
tags:
  - python
---
## For loops

```python
servers = ["web01", "web02", "web03"]

for server in servers:
	print("Pinging server:", server)
	
for char in "SUCCESS":
	print(char)
	
for idx in range(10):
	print("Pinging server:", idx)
```

## While loops

```python
coonection_attempt = 0
connected = False

while not connected and connection_attempt < max_attempts:
	print(f"Attempting to reach server: {connection_attempt + 1}")
	
	if connection_attempts == 3
		connected = True 
	
	connection_attempts += 1

if not connected:
	print("Failed to connect after maximum atempts.")
``` 


## Break and Continue

```python
users = ["guest", "tester", "admin01", "admin02", "dev01"]
found_admin = None

for user in users:
	print(f"Checking user: {user}")
	if user.startswith("admin"):
		found_admin = user
		print(f"Admin user found: {found_admin}. Stopping search.")
		break
		
		
for user in users:
	print(f"Checking user: {user}")
	if user.startswith("admin"):
		print(f"Skipping admin user: {user}")
		continue
	print(f"Processing user")
	
``` 

```python
# Double items using a for loop
old_items = [1, 2, 3, 4]
doubled_items = []

for item in old_items: 
	doubled_items.append(item * 2)
	
print(doubled_items)

#Example: Double items using list comprehension
doubled_items_with_comprehension = [item * 2 for item in old_items]
print(doubled_items_with_comprehension)
``` 


```python
# Filter with if in list comprehensions
numbers = [1, 5, 10, 8, 15]
even_numbers = [num + 1 for num in numbers if num % 2 == 0]
print(even_numbers)
```

```python
numbers = [1, 2, 3, 2, 4, 1, 3]
unique_squares = {x * x for x in numbers}
print(unique_squares)

servers = ["web!", "backend"]
server_ips = {server: f"192.168.1{i}" for i, server in enumerate(servers)}
print(server_ips)
```

```python 
servers = ["web", "backend"]
server_ips = {server: f"192.168.1.{i}" for i, server in enumerate(servers)}
print(server_ips)
```

## Conditional Expression (Ternary Operator)



