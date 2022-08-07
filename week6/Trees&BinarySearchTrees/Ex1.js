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

  findNode(v) {
    if (this.value == v) {
      return true;
    } else if (v > this.value && this.rightChild) {
      return this.rightChild.findNode(v);
    } else if (v < this.value && this.leftChild) {
      return this.leftChild.findNode(v);
    }
    return false;
  }
}

const letters = ['H', 'E', 'S', 'G', 'L', 'Y', 'I'];
let bSTree = new BSNode();
letters.forEach((l) => bSTree.insertNode(l));

console.log(bSTree.findNode('H')); // should print true
console.log(bSTree.findNode('G')); // should print true
console.log(bSTree.findNode('Z')); // should print false
console.log(bSTree.findNode('F')); // should print false
console.log(bSTree.findNode('y')); // should print false - we didn't make the tree case sensitive!
