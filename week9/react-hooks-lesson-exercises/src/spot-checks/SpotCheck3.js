import React, { useState, useEffect } from 'react';

export default function SpotCheck3() {
  const [like, setlike] = useState(0);

  useEffect(() => {
    document.title = `You have ${like} likes`;
  });

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>bashar $$ anwar</p>
        <button onClick={() => setlike(like + 1)}> Like </button>
      </div>
    </div>
  );
}
