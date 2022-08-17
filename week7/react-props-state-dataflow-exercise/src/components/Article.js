import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        {this.props.info.color} {this.props.info.type}
      </div>
    );
  }
}

export default Article;
