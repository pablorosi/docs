---
title: Python Core Concepts
date: 2026-08-19
tags:
  - python
---

## 1. Variables
```python
var1 = "hello"
item = "Code 101"
print(type(item))
```


## 2. Comments
```python
# Example of a single-line comment
```

## 3. Numbers (int and float)

When comparing floats directly, we may run into precision issues:
```python
0.1 * 3 == 0.3 # False
```
To tackle this, we can use the `math.isclose()` function:

```python
import math

math.isclose(0.1 * 3, 0.3)  # True
```

## 4. Arithmetic Operations

- `+`, `-`, `*`, `/`
- `/` true division -> float
- `//` floor division -> integer or float
- `%` modulo -> remainder
- `**` -> power

## 5. Strings

- **Concatenation (`+`):** Joins strings.
- **Length (`len()`):** Gets the number of characters.
- **Indexing (`[]`):** Access a character by position (0-based).
- **Slicing (`[:]`):** Extract substrings.
- `.lower() / .upper()`: Converts the entire string to uppercase or uppercase 
- `.strip() / .lstrip() / .rstrip()`: Removes invisible whitespace and newline characters (`\n`) from the edges.
- `.startswith() / .endswith()`: Returns a Boolean (`True` or `False`) if the string starts/ends with a specific pattern.
- `.split()` : Breaks a string apart into a List, splitting it at a character you define.
- `.join()`: The exact reverse of split. Takes a List and glues it together into a single string.
- `.replace()`: Swaps a specific substring with another one.

