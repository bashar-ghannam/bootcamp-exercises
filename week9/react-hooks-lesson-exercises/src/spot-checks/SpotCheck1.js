import React, { useState } from 'react';

export default function SpotCheck1() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <button onClick={decreaseCounter}>-</button>
        {counter}
        <button onClick={increaseCounter}>+</button>
      </div>
    </div>
  );
}
