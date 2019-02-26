import React from 'react'
import './header.css'


const Navbar = props => {
  return (
    <>
      <div class="flex-container">

        <div className='Navbar'>

          <nav class="navbar navbar-expand-lg ">
            <img width='20' src={require('../assets/image.jpeg')} />

            <div class="Pursuit">
            <ol> <a>Pursuit Tube</a> </ol>
            </div>

            <div class="navbar">
            <ol> <a href="/Home/default.asp" target="">Home</a> </ol>

            <ol><a href="/User/default.asp" target="">User</a></ol>

            <ol><a href="//default.asp" target= "''">Feed Editor</a></ol>
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