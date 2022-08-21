import React, { Component } from 'react';

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      fruit: '',
    };
  }

  handleSelect = (e) => {
    this.setState({ fruit: e.target.value }, function () {
      console.log(`${this.state.name} selected ${this.state.fruit}`);
    });
  };

  handleInputName = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.handleInputName}
        />
        <select
          id="select-input"
          value={this.state.fruit}
          onChange={this.handleSelect}
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
          <option value="banana">Banana</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;
