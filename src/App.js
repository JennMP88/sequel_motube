import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <>
        <Route path='/user' component={User} />
        <Route path='/' exact component={Home} />
        
       
      </>
    </HashRouter>
    );
  }
}

export default App;
