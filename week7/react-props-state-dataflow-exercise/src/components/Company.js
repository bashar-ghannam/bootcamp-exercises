import React, { Component } from 'react';
import SubCompany from './SubCompany';

class Company extends Component {
  render() {
    return <SubCompany name={this.props.name} />;
  }
}

export default Company;
