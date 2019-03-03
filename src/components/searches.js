import React from 'react';
import VideoPlayer from './video';
import axios from 'axios';
import './home.css';
import moment from 'moment';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: 'Bethel',
            videos: [],
        }
    }


    loadVideos = (query) => {

        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 10,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyAL6JKGb4TLsmM4MKvk0f85Bu4QpaJvgEs',
                q: query,
                pageToken: ''
            }
        })
            .then(res => {
                console.log('in here', res.data.items)
                let queryCopy = [...res.data.items]
                console.log('new', queryCopy)
                // queryCopy.input = res.data.items[0].snippet.title //copy 
                // console.log('look', queryCopy.input)
                this.setState({ videos: queryCopy }) //set to state
                console.log('err', this.state.videos)
            })
    }
    // ASK: get res.data.items into this.state. video 
    // then in render map over the this.state.videos and show it on page


    componentDidMount() {
        let query = this.state.input
        this.loadVideos(query)
    }

    componentDidUpdate(prevState, prevProps) {

        console.log('updated', prevState)
        console.log('stateNow', this.state)

    }

    render() {

        return (
            <>

                <div className="row">
                    <div className="col-2"></div>
                    {/* <div className="col-2"> */}
                        <div className="container">
                            {this.state.videos.map((e, i) => {
                                console.log('oneVid', e)
                                return <div>
                                    {e.snippet.default}
                                    {<img src={e.snippet.thumbnails.default.url} alt='vid' />}
                                    {e.snippet.title}
                                    {e.snippet.channelTitle}

                                </div>//   return <Dropdown click={this.handleDropdownClick} videos={e} />
                            })
                            }
                        {/* </div> */}
                    </div>
                    <div className="col"></div>
                </div>


            </>
        );
    }
}

export default Search;