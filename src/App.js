import React, { Component } from 'react';
import Navbar from './components/header';
import axios from 'axios';
import moment from 'moment';
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';
import FeedEditor from './components/feededitor';
import Search from './components/searches';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
 
      <HashRouter>
        <>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/user' component={User} />
          <Route path='/feededitor' component={FeedEditor} />
          <Route path='/searches' component={Search} />
          
        </>
      </HashRouter>

    );
  }
}

export default App;