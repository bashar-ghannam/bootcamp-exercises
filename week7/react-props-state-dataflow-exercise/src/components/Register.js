import React, { Component } from 'react';

class Register extends Component {
  render() {
    return ( 
      <div id="register">
        <h4>You cannot reserve during these times:</h4>
        {this.props.reservations.map((reservation) => (
          <div key={reservation.name}>
            {reservation.day} @ {reservation.time}
          </div>
        ))}
      </div>
    );
  }
}

export default Register;
