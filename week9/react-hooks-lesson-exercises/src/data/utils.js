const expenses = require('./expenses.json');

export const fetchExpenses = async (month) => {
  const monthlyExpenses = [];
  expenses.forEach((e) => {
    if (new Date(e.date).getMonth() == month) {
      monthlyExpenses.push(e);
    }
  });

  return monthlyExpenses;
};
