import React, { Component } from 'react';

class Quote extends Component {
  likeQuote = () => {
    this.props.likeQuote(this.props.quote.id);
  };

  render() {
    let q = this.props.quote;
    return (
      <div>
        <sup>{q.likes}</sup>
        <span className="add" onClick={this.likeQuote}>
          +
        </span>
        <span>{q.text}</span>
      </div>
    );
  }
}

export default Quote;
