import React, { Component } from 'react';
import AppBar from './AppBar';
import Environment from './Environment';

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="page-wrapper" className="gray-bg">

          <AppBar />
          <Environment />
        </div>
      </div>
    );
  }
}
