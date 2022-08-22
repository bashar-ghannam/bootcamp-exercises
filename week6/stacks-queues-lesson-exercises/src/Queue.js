class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
  }

  print() {
    console.log(this.queue);
  }

  isEmpty() {
    return this.front === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.queue[this.front - 1];
  }

  enqueue(item) {
    this.queue.splice(0, 0, item);
    this.front++;
  }

  dequeue() {
    const item = this.queue[this.front - 1];
    this.queue.pop();
    this.front--;
    return item;
  }
}
module.exports = Queue;
