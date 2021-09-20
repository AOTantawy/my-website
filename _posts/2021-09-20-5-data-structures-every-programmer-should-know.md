---
layout: post
title: "5 data structures every programmer should know"
---

Data structures are one of the most important topics in computer programming as it determines how much time and space our program will be, so in the following blog we will discuss some of the most common and important data structures.


# Table of contents

- [Arrays](#arrays)
- [LinkedList](#linkedlist)
- [Stack](#stack)
- [Queue](#queue)
- [Hash Table](#hash-table)


## Arrays

![Arrays in memory](https://media.geeksforgeeks.org/wp-content/uploads/Arrays-1.png "Arrays in memory src:geeksforgeeks.com")

- It's a data structure that stores a collection of elements in contiguous memory locations.
- Complexity:
    |Operations | Complexity|
    | ---      | ---       |
    | Access   | O(1)      |
    | -Linear- Search   | O(n) |
    | Insert   |   O(1), if array is not full |
    | Append   | O(n), if array is not full|
    | Delete   | O(n) | 
    > where n is the number of elements.
    
## LinkedList

![Singly LinkedList](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png "Singly LinkedList src:geeksforgeeks.com")

- it's a linear data structure, in which elements are stored in non-contiguous memory locations, and each element points to the next one through a pointer.
- Complexity:
	| Operation | Complexity | Notes |
	| ---  		| 	---		 | ---	 |
	| Access    | O(n)		 | ---     |
	| Search    | O(n)       | ---     |
	| Insert    | O(n)  	 | because you have to access the element first which takes O(n), but if you will insert an item as ahead it will take O(1) |
	| Delete    | O(n)       | because you have to access the element first which takes O(n), but if you will delete the head it will take O(1) |
- Notes:
	1. LinkedList is very useful and efficient when most of your operations are inserting and deleting.
	1. LinkedList is not preferred when most of your operations are accessing or searching.
	1. We have talked about one type of LinkedList (singly linked list) but there are many more like: 
		- [doubly LinkedList](https://www.programiz.com/dsa/linked-list-types#doubly) .
		- [circular LinkedList](https://www.programiz.com/dsa/linked-list-types#circular).
		- [Doubly circular LinkedList](https://www.geeksforgeeks.org/doubly-circular-linked-list-set-1-introduction-and-insertion).

## Stack

![How stack stored in memory](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg "stack src:tutorialspoint.com")

- it's a linear data structure in which each element is stored on top of the previous elements and retrieving elements should pick the lastest elements first following **last in - first out** principle.
- Complexity:
    |Operations | Complexity|
    | ---      | ---       |
    | Access   | O(n)      |
    | Search   | O(n)  |
    | Insert   |   O(1)| 
    | Delete   | O(1) | 
    
## Queue

![How queue stored in memory](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/01/Queue-2-1.png?fit=768%2C400&ssl=1  "queue src:learnersbucket.com")
   
- it's a linear data structure in which each element is stored on top of the previous elements and retrieving elements should pick the first entered elements first following **first in - first out** principle.
- Complexity:
    |Operations | Complexity|
    | ---      | ---       |
    | Access   | O(n)      |
    | Search   | O(n)  |
    | Insert   |   O(1)| 
    | Delete   | O(1) | 

## Hash Table

![hashing data structure src:geeksforgeeks.com](https://media.geeksforgeeks.org/wp-content/cdn-uploads/HashingDataStructure-min-1024x512.png "hashing data structure src:geeksforgeeks.com")


- it's a data structure that associate key-value pair into an index by using a hash function.
- hash function: it's a one-way mathematical function that map key-value pair into a set of indices.
- Complexity:
	| Operation | Complexity |
	| ---       |   ---      |
	| Access    |  O(1)      |
	| Search    | O(1)       |
	| Insert    |  O(1)      |
	| Delete    | O(1)       |
	> **Note:** complexity may change in some cases based on how the hash table is implemented. 
- Notes:
	- hash table uses array to store key value pairs.
	- it takes a huge memory space in order to avoid collision.
	- hash tables commonly used when:
		- inserting and retrieving data is a big deal.
		- key type is not suitable to be stored in array (strings, negative values).
- Useful Links:
	- [Hash Table](https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm)
	- [Hash Function](https://www.geeksforgeeks.org/what-are-hash-functions-and-how-to-choose-a-good-hash-function/)
	- [Collision](https://www.tutorialandexample.com/collision-resolution-techniques-in-data-structure/)
    