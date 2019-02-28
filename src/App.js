import React, { Component } from 'react'
import Navbar from './components/header';
import axios from 'axios';
import moment from 'moment';
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/home';
import User from './components/user';
import FeedEditor from './components/feededitor';
import Video from './components/video';



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
          <Route path='/video' component={Video}/>
        </>
      </HashRouter>

    );
  }
}

export default App;