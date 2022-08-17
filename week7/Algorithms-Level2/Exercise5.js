const colors = ['red', 'indigo', 'white', 'teal', 'yellow'];
const foods = ['bread', 'cheese', 'cucumber'];

const jumble = function (arr1, arr2) {
  let set = new Set();
  let jumbledArr = [];
  while (true) {
    let firstOrSecond = Math.floor(Math.random() * 2) + 1;
    if (firstOrSecond == 1) {
      const randomElement = arr1[Math.floor(Math.random() * arr1.length)];
      if (!set.has(randomElement)) {
        jumbledArr.push(randomElement);
        set.add(randomElement);
      }
    }
    if (firstOrSecond == 2) {
      const randomElement = arr2[Math.floor(Math.random() * arr2.length)];
      if (!set.has(randomElement)) {
        jumbledArr.push(randomElement);
        set.add(randomElement);
      }
    }
    if (jumbledArr.length == arr1.length + arr2.length) {
      return jumbledArr;
    }
  }
};

console.log(jumble(colors, foods));
