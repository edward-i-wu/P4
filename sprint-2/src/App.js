import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';

import ContentBody from './Components/ContentBody.js';
import Upload from './Components/Upload.js';




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
