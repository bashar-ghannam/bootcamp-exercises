const Bank = function () {
  let _money = 500;
  const depositCash = (cash) => (_money += cash);
  const checkBalance = () => console.log(_money);
  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
