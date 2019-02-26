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

                <div class="row">
                    <div class="side">
                        <h2>Feed list</h2>
                        </div>
                    </div>

                      <div class="main">
                     <h2>TITLE HEADING</h2>
                     </div>
            </>
                    )
                }
            
            }
export default Home;