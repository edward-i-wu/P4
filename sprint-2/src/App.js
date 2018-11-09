import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Video from './Video';
import VidList from './VidList';
import ContentBody from './ContentBody.js';
import Upload from './Upload.js';




class App extends Component {
  render() {
    return (
     
        
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact render={()=><Redirect to='/video/'></Redirect>}></Route> 
          <Route path='/video/:vidId?'  component={ContentBody}></Route>
          <Route path='/upload' component={Upload}></Route>
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
