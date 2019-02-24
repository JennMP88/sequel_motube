import React, { Component } from 'react'

// import axios from 'axios';
// import moment from 'moment';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/header';

import axios from 'axios';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (

      <>
      
      <Navbar />
      {/* <SearchBar/> */}
      </>

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