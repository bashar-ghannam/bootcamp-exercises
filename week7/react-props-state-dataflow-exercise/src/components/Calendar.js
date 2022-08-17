import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map((reservation) => (
          <div key={reservation.name}>
            {reservation.name} has a reservation on {reservation.day} @
            {reservation.time}
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;
