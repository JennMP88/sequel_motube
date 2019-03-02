import React from 'react';
import axios from 'axios';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feedlist: [
                {
                    query: 'Bethel',
                    videos: [
                        {
                            title: '',
                            thumbnail: '',
                            channel: '',
                            posted: '',
                            id: '',

                        },
                    ]
                },
            ]
        }
    }


    updateState=(arr)=>{
        this.setState({
            feedlist:(this.state.feedlist).concat(arr)
        })
    }

    loadVideos = (query) => {
  
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

          .then(res=>{
              console.log('in here',res.data.items)
              this.state
          })

        // .then((response)=>{

    
            // .then(res => res.data)
            // .then((data) => {
            //     console.log(data.items)
            //     let feedCopy = [...this.state.feedlist]

                
            //     feedCopy[0].videos[0].title = data.items[0].snippet.title
            //     feedCopy[0].videos[0].thumbnail = data.items[0].snippet.thumbnails.medium.url
            //     feedCopy[0].videos[0].channel = data.items[0].snippet.channelTitle
            //     feedCopy[0].videos[0].posted = data.items[0].snippet.publishedAt
            //     feedCopy[0].videos[0].id = data.items[0].id.videoId
            //     this.setState({ feedlist: feedCopy })

            // })
    }

    componentDidMount() {
        let query = this.state.feedlist[0].query
        this.loadVideos(query)
    }
    componentDidUpdate(prevState, prevProps) {

        console.log('updated', prevState)
        console.log('stateNow', this.state)
    
      }
    render() {
        const {loadVideos}=this.props;
        console.log(loadVideos)
      
        return (
            <>
          <div className='row' >

<div class="col-8">
    <div className='title' class="main">
        <h2>Search Results For .....</h2>    {/* PUT TITLE IN MAP  */}
    </div>
    <div className='fl' >
        {
            this.state.feedlist.map((feed, i) => {
                return <div className='row' >
                    {
                        feed.videos.map((video) => {
                            return <VideoPlayer video={video} />
                        })
                    }

                </div>
            })
        }

    </div>

</div>
</div>
      
            
            </>
        )
    }

}
export default Search;
