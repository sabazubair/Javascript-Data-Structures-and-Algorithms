// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // executed every time we have a new instance of a node; initialize node
  // next is default to null; in case it's the last in the chain
  constructor(data, next = null) {
    this.data = data; // data is a convention; variable, can be anything
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
