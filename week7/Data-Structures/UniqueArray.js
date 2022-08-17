class UniqueArray {
  constructor() {
    this.UniqueArray = [];
    this.uniqueArrayLength = 0;
  }

  showAll() {
    for (const element in this.UniqueArray) {
      console.log(this.UniqueArray[element]);
    }
  }

  add(item) {
    let isExist = false;
    for (const element in this.UniqueArray) {
      if (item == this.UniqueArray[element]) {
        isExist = true;
      }
    }
    if (!isExist) {
      this.UniqueArray[this.uniqueArrayLength] = item;
      this.uniqueArrayLength++;
    }
  }

  exists(item) {
    let set = new Set(this.UniqueArray);
    return set.has(item);
  }

  get(index) {
    if (this.UniqueArray[index]) {
      return this.UniqueArray[index];
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add('toy');
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add('toy');
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists('toy')); //returns true
uniqueStuff.add('poster');
uniqueStuff.add('hydrogen');
uniqueStuff.showAll();
console.log(uniqueStuff.get(2)); //prints "hydrogen"
console.log(uniqueStuff.get(4)); //prints "hydrogen"
