const findDuplicates = function (ages) {
  const agesSet = new Set();
  let obj = {};
  for (let i = 0; i < ages.length; i++) {
    if (agesSet.has(ages[i])) {
      console.log(`${ages[i]} has a duplicate`);
    } else {
      agesSet.add(ages[i]);
    }
  }
};
findDuplicates([1, 3, 1, 2, 1, 3]);
