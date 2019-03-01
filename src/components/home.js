import React from 'react';
import Video from './video'
import './home.css'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feedlist: [
                {

                    videos: [
                        {
                            title: 'johny',
                            thumbnail: [],
                            channel: [],
                            posted: '',
    
                        },
    
                        {
                            title: 'lilo',
                            thumbnail: [],
                            channel: [],
                            posted: '',
    
                        },
                        {
                            title: 'stitch',
                            thumbnail: [],
                            channel: [],
                            posted: '',
    
                        },
                        {
                            title: 'joe',
                            thumbnail: [],
                            channel: [],
                            posted: '',
    
                        }
                    ]
                },
                {

                videos: [
                    {
                        title: 'micheal',
                        thumbnail: [],
                        channel: [],
                        posted: '',

                    },

                    {
                        title: 'drake',
                        thumbnail: [],
                        channel: [],
                        posted: '',

                    },
                    {
                        title: 'serge',
                        thumbnail: [],
                        channel: [],
                        posted: '',

                    },
                    {
                        title: 'jenn',
                        thumbnail: [],
                        channel: [],
                        posted: '',

                    }
                ]
            }
            ]


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
                                {
                                    this.state.feedlist.map((feed,i) => {
                                       return <div className='row' >
                                      

                                    {
                                        feed.videos.map((video) => {
                                            return <Video title = {video.title}/>
                                        } )
                                    }

                                        </div>
                                    })
                                }

                                
                                    
                                    
                                       
                                    

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