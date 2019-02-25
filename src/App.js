import React, { Component } from 'react'
import Navbar from './components/header';
import axios from 'axios';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';
import



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (

      
      <BrowserRouter>
        <>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/user' component={User} />
          <Route path='/user' component={} />Feededitor
        </>
      </BrowserRouter>

    );
  }
}

export default App;