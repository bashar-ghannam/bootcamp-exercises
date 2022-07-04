const StringFormatter = function () {
  const capitalizeFirst = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);
  const skewerCase = (name) => name.replace(' ', '-');
  return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase,
  };
};

const formatter = StringFormatter();
console.log(formatter.capitalizeFirst('dorothy')); //should print Dorothy
console.log(formatter.skewerCase('blue box')); //should print blue-box
