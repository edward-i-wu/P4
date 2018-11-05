import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Video from './Video';
import VidList from './VidList';
import ContentBody from './ContentBody.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="header-divider"></div>
        <ContentBody/>
      </div>
    );
  }
}

export default App;
