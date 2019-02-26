import React from 'react'
import './header.css'


const Navbar = props => {
  return (
    <>
      <div class="flex-container">

        <div className='Navbar'>

          <nav class="navbar navbar-expand-lg ">
            <img width='20' src={require('../assets/image.jpeg')} />

            <div class="navbar">
              <a href="#"> Pursuit Tube</a>
              <a href="#"> Home </a>
              <a href="#"> User </a>
              <a href="#"> Feed Editor </a>
            </div>

            <input class="box" type="search" id="search" placeholder="Search" />

            <button className='searchButton' type='text' placeholder='Search ...' >Search</button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

              <div class="navbar-nav">

              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}


export default Navbar;