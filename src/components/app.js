import React, { Component } from 'react';
import PostsIndex from './posts_index'
export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        {this.props.children}
      </div>
    );
  }
}
