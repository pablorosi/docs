---
title: Dictionaries
date: 2026-08-19
tags:
  - python
---
Key value pairs

```python
my_dictionary = {'a': 1, 'b': 2, 'c': 3}
print(f"Lenght: {len(my_dictionary)}")

print(f"Keys: {my_dictionary.keys()}")
print(f"Values: {my_dictionary.values()"})
print(f"Items: {my_dictionary.items()"}) #Returns a collection of tuples

for item in my_dictionary.items():
	print(type(item))

for item in my_dictionary.items():
	print(f"- {key}: {value}")
	
# Membership test
print("f 'b' is in : {my_dictionary.keys()}")
print(f"'b' is in my_dictionary? {"b" in my_dictionary}")
print(f"1 is in values of my_dictionary {1 in set(my_dictionary.values())}")
	
print("'b':", my_dictionary["b"]) # Will raise KeyError if key is not persent in the dictionary 
print("'b':", my_dictionary.get("b", -1)) # Will not raise KeyError. We can provide a default value

my_dictionary.setdefault("d", 4)

# Removing elements 
removed = my_dictrionary.pop("a")
print(f"Removed value: {removed}")
removed = my_dictionary.popitem()
print(f"Removed value: {removed}")

my_dictionary.clear()


tags = {
	"Enviroment: "Production",
	"Owner": "Finance"
	"CostCenter": "10000"
}

tags["CostCenter"] = "12345" #Updates the tag
tags["Project"] = "Python" #Creates a new tag

merged_tags = default_tags | custom_tags #If there is a repeated tag custom_tag will override default_tags
``` 

