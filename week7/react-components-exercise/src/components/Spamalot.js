import Spam from './Spam';
import React, { Component } from 'react';

class Spamalot extends Component {
  render() {
    let arr = [];
    for (let i = 0; i < 500; i++) {
      arr.push(i);
    }
    return (
      <div className="exercise" id="ex-2">
        {arr.map((item) => {
          return <Spam id={item} />;
        })}
      </div>
    );
  }
}

export default Spamalot;
