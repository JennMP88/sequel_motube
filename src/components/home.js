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

                <body>
                       <div class="container-fluid"> 
                       <h2 class="display-4">Feed List</h2>
                       <div class="row-fluid">
                       
                       
                        <div class="span2">
                            {/* <!--Sidebar content--> */}
                            </div>
                           <div class="span10">
                          
                            {/* <!--Body content--> */}
                            </div>
                    </div>
                </div>
         </body>
            </>
        )
    }

}
export default Home;