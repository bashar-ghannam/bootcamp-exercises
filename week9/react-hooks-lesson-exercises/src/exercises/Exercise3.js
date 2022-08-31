import React, { useEffect, useState } from 'react';
import { fetchExpenses } from '../data/utils';

export default function Exercise3() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let newExpenses = await fetchExpenses(month);
      setExpenses(newExpenses);
    };
    fetchData();
  }, [month]);

  const handleChange = (e) => {
    const { value } = e.target;
    setMonth(value);
  };

  return (
    <div className="ex-space">
      {console.log(expenses)}
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select name="month" id="month" value={month} onChange={handleChange}>
          {months.map((month, index) => {
            return (
              <option value={index} key={index}>
                {month}
              </option>
            );
          })}
        </select>
        {expenses.map((expense, index) => {
          return (
            <p key={index}>
              <span>{expense.item}</span> <span>{expense.date}</span>{' '}
              <span>{expense.amount}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
