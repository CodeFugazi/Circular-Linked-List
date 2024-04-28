# Circular Linked List in JavaScript

This project implements a circular linked list data structure in JavaScript.

## Overview

A circular linked list is a type of linked list where the last node points back to the first node, forming a circle. This implementation provides basic functionalities such as adding nodes to the list and traversing the list in a circular manner.

## Usage

### Installation

No installation is required. Simply include the `circularLinkedList.js` file in your project.

### Example Usage

```javascript
// Create a new circular linked list
const myList = new CircularLinkedList();

// Add nodes to the list
myList.add("pink");
myList.add("green");
myList.add("blue");

// Traverse the list
let currentNode = myList.head;
do {
  console.log(currentNode.value);
  currentNode = currentNode.next;
} while (currentNode !== myList.head);
```

CircularLinkedList()

    Constructor function to create a new circular linked list.

add(value)

    Adds a new node with the given value to the end of the list.

Node(value)

    Constructor function to create a new node with the given value.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
