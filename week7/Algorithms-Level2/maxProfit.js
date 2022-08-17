let getMaxProfit = function (prices) {
  let currentBuy = prices[0];
  let globalSell = prices[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    currentProfit = prices[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = prices[i];
    }

    if (currentBuy > prices[i]) {
      currentBuy = prices[i];
    }
  }
  return [globalSell - globalProfit, globalSell];
};

console.log(getMaxProfit([10, 7, 5, 8, 5, 9])); // 4
console.log(getMaxProfit([200, 150, 180, 300, 10, 150])); //150
console.log(getMaxProfit([100, 50, 100, 30, 90])); //60
console.log(getMaxProfit([100, 90, 90, 80, 80])); //0
console.log(getMaxProfit([100, 90, 80, 60, 50])); //-10
