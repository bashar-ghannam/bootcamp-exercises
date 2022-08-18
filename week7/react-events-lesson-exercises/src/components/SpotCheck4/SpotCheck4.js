import React, { Component } from 'react';
import Quote from './Quote';

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

  likeQuote = (quoteId) => {
    let currentQuote = [...this.state.quotes];
    currentQuote.find((q) => q.id === quoteId).likes++;
    this.setState({ quotes: currentQuote });
  };
  render() {
    return (
      <div>
        {this.state.quotes.map((q) => {
          return <Quote quote={q} key={q.id} likeQuote={this.likeQuote} />;
        })}
      </div>
    );
  }
}

export default SpotCheck3;
