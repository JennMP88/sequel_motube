import React, { Component } from 'react'
// import axios from 'axios';
// import moment from 'moment';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/header';


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
    );
  }
}

export default App;