const box = document.querySelectorAll(".box");
/* box[0].classList.add("green"); */

function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;

  this.add = (value) => {
    // Create a new node with the given value
    const newNode = new Node(value);

    // Check if the list is empty
    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty:
      // - Set the next pointer of the new node to the current head
      newNode.next = this.head;
      // - Set the previous pointer of the new node to the current tail
      newNode.prev = this.tail;
      // - Set the next pointer of the current tail to the new node,
      //   establishing the link between the last node and the new node
      this.tail.next = newNode;
      // - Update the tail of the list to point to the new node,
      //   making the new node the new tail
      this.tail = newNode;
    }

    // Finally, ensure that the head's previous pointer points to the tail
    // to maintain circularity in the linked list
    this.head.prev = this.tail;
  };
}

const myCircularList = new CircularLinkedList();
myCircularList.add("pink");
myCircularList.add("green");
myCircularList.add("blue");

// Start at the head of the list
let currentNode = myCircularList.head;
let index = 0; // Initialize the index counter

setInterval(() => {
  const nodeColor = currentNode.value;
  console.log(nodeColor);
  // Add the color of the current node to the next box element
  box[index].classList.toggle(nodeColor);

  // Move to the next node
  currentNode = currentNode.next;

  // Increment the index
  index++;

  // Reset index to 0 when it reaches the head node again
  if (currentNode === myCircularList.head) {
    index = 0;
  }
}, 1000);
