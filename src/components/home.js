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
                            
                         <h1 className= "h1">
                            <a>First Take </a>
                            </h1>

                                    {/* <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Espn First Take</button> */}

                
                   <h2>FeedList</h2>

                 <span className="main">

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
                 </span>


                    <div class="text-center">

                        <div class="spinner-border" role="status">


                            <span class="sr-only">Loading...</span>

                        </div>

                    </div>


            </>
        )
    }

}
export default Home;