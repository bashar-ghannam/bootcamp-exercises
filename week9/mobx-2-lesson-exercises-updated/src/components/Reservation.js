import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Reservation extends Component {
  completeRes = () => {
    this.props.RestaurantStore.completeRes(this.props.reservation.id);
  };

  seatRes = () => {
    this.props.RestaurantStore.seatRes(this.props.reservation.id);
  };
  render() {
    let reservation = this.props.reservation;
    return (
      <div className={reservation.completed ? 'conditional' : ''}>
        {reservation.name} {reservation.numPeople}
        <button onClick={this.completeRes}>Complete reservation</button>
        <button onClick={this.seatRes}>Seat reservation</button>
      </div>
      //render the reservation data here
      //make sure you store the ID somewhere so you can find the reservation
      //use the class "conditional" to conditionally render completed reservations
      //You should hav ea complete reservation button to complete the reservation
    );
  }
}

//inject your store here
export default inject('RestaurantStore')(observer(Reservation));
