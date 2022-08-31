import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Restaurant from './components/Restaurant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Reservations</h3>
        <Restaurant />
      </div>
    );
  }
}

export default observer(App);
