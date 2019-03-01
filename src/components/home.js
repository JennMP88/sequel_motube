import React from 'react';
import Video from './video'
import './home.css'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            title:'',
            thumbnail:[],
            channel:[],
            posted:'',
            
            part: 'snippet',
            maxResults: 8,
            videoDefinition: 'high',
            type: 'video',
            videoEmbeddable: 'true',
            key: 'AIzaSyBe5mlFvs3Zs8cVdXwSKqQg4XDKzBu3J7I',
            q: '',
            pageToken: ''
        }
    }

    
    render() {
        return (
            <>

                <div className='row' >
                      <div className='Jumbo'>
                    <div class="jumbotron jumbotron-fluid">
                        <h1 class="display-4">User Playlist</h1>
                    </div>
                </div>

                 <div class="container">
                     <div class="row">
                    <div class="col-4">
                        <div className='fl' class="side">
                            <h2>Feed list</h2>
                        </div>
                    </div>
                     <div class="col-8">
                     <div className='title' class="main">
                        <h2>TITLE HEADING</h2>
                     </div>
                    <div className='fl' class="side">
                        <Video />
                    </div>
                    
                    </div>
                    </div>
                    </div>
                      

                </div>


                     
            </>
                    )
                }
            
            }
export default Home;