import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
    };
  }

  handleInputName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleInputAge = (e) => {
    this.setState({ age: e.target.value });
  };

  alertSomething = () => {
    alert(
      `Come in ${this.state.name}, you’re ${this.state.age} - that’s good enough`
    );
  };
  render() {
    return (
      <div>
        <input
          id="name-input"
          name={this.state.name}
          onChange={this.handleInputName}
        />
        <input
          id="age-input"
          age={this.state.age}
          onChange={this.handleInputAge}
        />
        <button onClick={this.alertSomething}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
