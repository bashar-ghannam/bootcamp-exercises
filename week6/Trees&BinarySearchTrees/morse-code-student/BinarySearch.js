class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(val) {
    if (val < this.value && this.leftChild) {
      return this.leftChild.findNode(val);
    } else if (val > this.value && this.rightChild) {
      return this.rightChild.findNode(val);
    } else if (val === this.value) {
      return this;
    } else return false;
  }
}

module.exports = BSNode;
