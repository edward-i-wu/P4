import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="video-container">
          <Video></Video>
          {/* <VFeed></VFeed> */}
        </div>
      </div>
    );
  }
}

export default App;
