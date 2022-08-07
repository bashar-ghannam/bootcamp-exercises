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

  findCommonParent(firstPara, secondPara) {
    if (firstPara < this.value && secondPara > this.value) {
      return this.value;
    } else if (
      firstPara > this.value &&
      secondPara > this.value &&
      this.rightChild.value == firstPara
    ) {
      return this.value;
    } else if (
      firstPara < this.value &&
      secondPara < this.value &&
      this.leftChild.value == secondPara
    ) {
      return this.value;
    } else if (secondPara > this.value && firstPara > this.value) {
      return this.rightChild.findCommonParent(firstPara, secondPara);
    } else if (secondPara < this.value && firstPara < this.value) {
      return this.leftChild.findCommonParent(firstPara, secondPara);
    }
  }
}

const letters = ['J', 'H', 'R', 'E', 'S', 'P', 'G', 'B', 'L', 'Y', 'I'];
let bSTree = new BSNode();
letters.forEach((l) => bSTree.insertNode(l));

console.log(bSTree.findCommonParent('B', 'I')); //should return "H"
console.log(bSTree.findCommonParent('B', 'G')); //should return "E"
console.log(bSTree.findCommonParent('B', 'L')); //should return "J"
console.log(bSTree.findCommonParent('L', 'Y')); //should return "R"
console.log(bSTree.findCommonParent('E', 'H')); //should return "J"

