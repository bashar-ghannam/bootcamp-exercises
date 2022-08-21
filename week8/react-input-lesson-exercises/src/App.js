import React, { Component } from 'react';
import './App.css';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 1</h4 >
          <Exercise1 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 2</h4 >
          <Exercise2 />
        </div>
      </div>
    )
  }
}

export default App;
