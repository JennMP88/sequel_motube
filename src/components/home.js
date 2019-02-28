import React from 'react';
import './home.css';


class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>

                <span className='Jumbo'>

                    <h1 class="display-4">User Playlist</h1>
                </span>



                <div class="container">

                    <div class="dropdown-menu"> <h2> '' </h2></div>

                    <div class="row">

                        <div class="col-sm">

                            <span>
                                <div class="side">

                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Espn First Take</button>

                                </div>

                            </span>

                        </div>
                    </div>
                </div>

                <div class="main">

                    <h2>Feed List</h2>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Espn First Take</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Drake</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Coldfusion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Clear History</a>
                        </li>
                    </ul>
                    
                    <div class="text-center">

                        <div class="spinner-border" role="status">


                            <span class="sr-only">Loading...</span>

                        </div>

                    </div>

                </div>


            </>
        )
    }

}
export default Home;