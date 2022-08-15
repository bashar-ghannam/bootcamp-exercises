import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <h1>bashar</h1>;
  }

  getMorningGreeting() {
    return <p>Good Morning</p>;
  }

  getEveningGreeting() {
    return <p>Good Evening</p>;
  }

  showCompany(name, revenue) {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  }

  getClassName(temperature) {
    return temperature < 15 ? (
      <div id="weatherBox" className="freezing"></div>
    ) : 15 < temperature && temperature < 30 ? (
      <div id="weatherBox" className="fair"></div>
    ) : (
      <div id="weatherBox" className="hell-scape"></div>
    );
  }

  render() {
    let companies = [
      { name: 'Tesla', revenue: 140 },
      { name: 'Microsoft', revenue: 300 },
      { name: 'Google', revenue: 600 },
    ];

    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() < 12
              ? this.getMorningGreeting()
              : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>,
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map((company) => {
              return this.showCompany(company.name, company.revenue);
            })}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(14)}
            {this.getClassName(25)}
            {this.getClassName(40)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
