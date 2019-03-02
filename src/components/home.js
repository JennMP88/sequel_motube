import React from 'react';
import Video from './video';
import axios from 'axios';
import './home.css'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feedlist: [
                {
                    query: 'New ish',
                    videos: [
                        {
                            title: 'johny',
                            thumbnail: '',
                            channel: '',
                            posted: '',
                            id: '',
                        },
                        {
                            title: 'lilo',
                            thumbnail: [],
                            channel: [],
                            posted: '',
                            id: ' '
                        },

                        {
                            title: 'stitch',
                            thumbnail: [],
                            channel: [],
                            posted: '',
                            id: ''
                        },

                    ]
                },
            ]



        }
    }

    getVideos = (query) => {
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 8,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyBqsTC2uJ5zklkPcEDeLpAz4B6UktMYuPo',
                q: query,
                pageToken: ''
            }
        })
            .then(res => res.data)
            .then((data) => {
                let feedCopy = [...this.state.feedlist]
                feedCopy[0].videos[0].title = data.items[0].snippet.title
                feedCopy[0].videos[0].thumbnail = data.items[0].snippet.thumbnails.medium.url
                feedCopy[0].videos[0].channel = data.items[0].snippet.channelTitle
                feedCopy[0].videos[0].posted = data.items[0].snippet.publishedAt
                feedCopy[0].videos[0].id = data.items[0].id.videoId
                this.setState({ feedlist: feedCopy })
            })
    }

    componentDidMount() {
        let query = this.state.feedlist[0].query
        this.getVideos(query)
    }

    render() {
        return (
            <>

                <div className='Container' >
                    <div className='Jumbo'>
                        <div class="jumbotron jumbotron-fluid">
                            <h1 class="display-4">User's Playlist </h1>
                        </div>
                    </div>


                    <div class="container">

                        <div class="row">

                            <div class="col-4">

                                <h2>Feed list</h2>

                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action">ESPN First Take</a>
                                    <a href="#" class="list-group-item list-group-item-action">Drake</a>
                                    <a href="#" class="list-group-item list-group-item-action">Coldfusion</a>
                                </div>
                            </div>


                            <div class="col-8">
                                <div class="column">

                                    <div className='title' class="main">

                                        <h2> Espn First Take</h2>
                                    </div>
                                </div>

                                <div className='fl' class="side">
                                    {
                                        this.state.feedlist.map((feed, i) => {
                                            return <div className='row' >

                                                {
                                                    feed.videos.map((video) => {
                                                        return <Video video={video} />
                                                    })
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