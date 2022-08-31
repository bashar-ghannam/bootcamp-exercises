import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component {
  addRes = () => {
    this.props.RestaurantStore.addRes(
      this.props.GeneralStore.name,
      this.props.GeneralStore.numPeople
    );
  };
  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        <div>
          <span># of people in restaurant : </span>
          <span>{this.props.RestaurantStore.restPopulation}</span>
        </div>
        <div>
          <span># of completed tables : </span>
          <span>{this.props.RestaurantStore.completedTables}</span>
        </div>
        <ResInput />
        <button id="addRes" onClick={this.addRes}>
          Add Reservation
        </button>
        <div className="reservations">
          {this.props.RestaurantStore.reservations.map((reservation, index) => {
            return <Reservation reservation={reservation} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default inject('GeneralStore', 'RestaurantStore')(observer(Restaurant));
