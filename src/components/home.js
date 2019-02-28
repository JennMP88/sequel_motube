import React from 'react';
import './home.css'


class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>

                <div className='Jumbo'>
                    <div class="jumbotron jumbotron-fluid">
                        <h1 class="display-4">User Playlist</h1>
                    </div>
                </div>

     


                 <div class="container">
                 <div class="dropdown-menu"></div>
                     <div class="row">
                    <div class="col-sm">
                        <div class="side">
                        <h2>Feed list</h2>
                    </div>
                    </div>
                    </div>
                    </div>
                      

                      <div class="main">
                      <div class="row">
                     <h2>Espn First Take</h2>
                     <div class="col-sm">
                     </div>
                     </div>
                     </div>
            </>
                    )
                }
            
            }
export default Home;