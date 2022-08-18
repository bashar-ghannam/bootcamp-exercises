import React, { Component } from 'react';

class SpotCheck3 extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          id: '3bf00g',
          text: 'Friends are like butter, always wrapped up in their own thing',
          likes: 24,
        },
        {
          id: '50xx11',
          text: "If you're going to walk in the rain, at least make sure it's raining",
          likes: 82,
        },
        {
          id: '50ggr2',
          text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.",
          likes: 33,
        },
      ],
    };
  }

  likeQuote = () => {
    let currentQuotes = [...this.state.quotes];
    currentQuotes[0].likes++;
    this.setState({ quotes: currentQuotes });
  };

  render() {
    return (
      <div>
        {this.state.quotes.map((q) => {
          return (
            <div key={q.id} className="quotes">
              <sup>{q.likes}</sup>
              <span onClick={this.likeQuote}>+</span>
              <span>{q.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SpotCheck3;
