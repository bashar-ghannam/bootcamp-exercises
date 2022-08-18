import React, { Component } from 'react';
import './App.css';
import SpotCheck1 from './components/SpotCheck1/SpotCheck1';
import {SpotCheck2} from './components/SpotCheck2/SpotCheck2';
import SpotCheck3 from './components/SpotCheck3/Spotcheck3';
import SpotCheck5 from './components/SpotCheck5/SpotCheck5';
import Exercise1 from './components/Exercise1/Exercise1';
import Exercise2 from './components/Exercise2/Exercise2';
import SpotCheck4 from './components/SpotCheck4/SpotCheck4';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  
  render() {
    return (
      <div >

        <div className='ex-space'>
          <h4 className='ex-title'>Spot Check 1</h4 >
          <SpotCheck1 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Spot Check 2</h4 >
          <SpotCheck2 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Spot Check 3</h4 >
          <SpotCheck3 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Spot Check 4</h4 >
          <SpotCheck4 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Spot Check 5</h4 >
          <SpotCheck5 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 1</h4 >
          <Exercise1 />
        </div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercises 2-7</h4 >
          <Exercise2 />
        </div>

      </div>
    );
  }
}

export default App;
