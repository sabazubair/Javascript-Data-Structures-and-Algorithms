// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor () { // [initialize] constructor automatically gets called when we create a new instance of class
    this.data = []; // data is a variable name
  }
  add(record) { // add method will be called with some record that will need to be stored in our array
    this.data.unshift(record); // insert record to front of array
  }
  remove(record) { // removes last record in queue; we may want to work with removed record, add return
    return this.data.pop(record);
  }
}

module.exports = Queue;
