import React from 'react'
import './header.css'

const Navbar = props => {
    return(
        <>
<div className='headercolor'>
  <nav class="navbar navbar-expand-lg ">
  <a className='mainTitle' class="navbar-brand" href="#">Pursuit Tube</a>
  <a className="home" class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
  <a className='user' class="nav-item nav-link" href="#">User</a>
  <a className='feedEdit' class="nav-item nav-link" href="#">Feed Editor</a>
  <input className='searchInput' type='text'placeholder='Search ...' ></input>
  <button className='searchButton'type='text' placeholder='Search ...' >Search...</button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
 
     
    </div>
  </div>
</nav>
</div>

        </>
    )
}


export default Navbar;