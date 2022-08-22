const Queue = require('./Queue');

class DuoQueue {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  enqueue(person, qNum) {
    if (qNum === 1) {
      this.q1.enqueue(person);
    } else {
      this.q2.enqueue(person);
    }
  }

  dequeue(qNum) {
    if (qNum === 1) {
      return this.q1.dequeue();
    } else {
      return this.q2.dequeue();
    }
  }

  getLongestQueue() {
    return this.q1.front > this.q2.front ? this.q1 : this.q2;
  }

  getShortestQueue() {
    return this.q1.front > this.q2.front ? this.q2 : this.q1;
  }

  balanceQueues() {
    let large = this.getLongestQueue();
    let small = this.getShortestQueue();
    let difference = large.queue.length - small.queue.length;
    for (let i = 1; i < Math.round(difference / 2); i++) {
      small.enqueue(large.dequeue());
    }
  }
}
module.exports = DuoQueue;
