import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <>
        <Route path='/' exact component={Home} />
        <Route path='/user' component={User} />
        
       
      </>
    </BrowserRouter>
    );
  }
}

export default App;
