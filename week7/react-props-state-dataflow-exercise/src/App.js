import React, { Component } from 'react';
import './App.css';
import Company from './components/Company';
import Wardrobe from './components/Wardrobe';
import Wardrobe2 from './components/Wardrobe2';
import Calendar from './components/Calendar';
import Register from './components/Register';
import Hudini from './components/Hudini';
import Home from './components/Home';
import Landing from './components/Landing';

class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: [
        { name: 'Tesla', revenue: 140 },
        { name: 'Microsoft', revenue: 300 },
        { name: 'Google', revenue: 600 },
      ],
      reservations: [
        { day: 'Monday', time: 2000, name: 'Earl' },
        { day: 'Monday', time: 1845, name: 'Ella' },
        { day: 'Tuesday', time: 1930, name: 'Linda' },
        { day: 'Wednesday', time: 2015, name: 'Anni' },
      ],
      user: 'Robyn',
      store: [
        { item: 'XSPS Pro Player', price: 800, discount: 0.2, hottest: false },
        { item: 'Gizem Backwatch', price: 230, discount: 0.6, hottest: false },
        {
          item: 'Surround Sound Pelican',
          price: 3099,
          discount: 0.05,
          hottest: true,
        },
      ],
      shouldDiscount: false,
      currentPage: 'Landing',
    };
  }
  generateCompanyTags(companies) {
    return companies.map((company) => (
      <Company
        name={company.name}
        revenue={company.revenue}
        key={company.name}
      />
    ));
  }

  upperCase(name) {
    return name.toUpperCase();
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
          <h4 className="ex-title">Spotcheck 1</h4>
          <div className="exercise" id="spotcheck-1">
            <Company name={companies[0].name} />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 2</h4>
          <div className="exercise" id="spotcheck-2">
            {this.generateCompanyTags(companies)}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 3</h4>
          <div className="exercise" id="spotcheck-3">
            {companies.map((company) => (
              <Company
                name={this.upperCase(company.name)}
                revenue={company.revenue}
                key={company.name}
              />
            ))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 4</h4>
          <div className="exercise" id="spotcheck-4">
            <Wardrobe />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 5</h4>
          <div className="exercise" id="spotcheck-5">
            <Wardrobe2 />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 6</h4>
          <div className="exercise" id="spotcheck-6">
            {this.state.companies.map((company) => (
              <Company
                name={this.upperCase(company.name)}
                revenue={company.revenue}
                key={company.name}
              />
            ))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 7</h4>
          <div className="exercise" id="spotcheck-7">
            <Calendar reservations={this.state.reservations} />
            <Register reservations={this.state.reservations} />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            <Hudini />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            <Landing name={this.state.user} store={this.state.store} />
            <Home store={this.state.store} />
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 3</h4>
          <div className="exercise" id="ex-3">
            {this.state.currentPage === 'Landing' ? (
              <Landing name={this.state.user} store={this.state.store} />
            ) : (
              <Home store={this.state.store} />
            )}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 4</h4>
          <div className="exercise" id="ex-4">
            <Landing name={this.state.user} store={this.state.store} />
            <Home
              store={this.state.store}
              shouldDiscount={this.state.shouldDiscount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
