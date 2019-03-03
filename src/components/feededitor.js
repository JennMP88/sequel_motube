import React from 'react';


class FeedEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: ['espn', 'isadora'],
            input: '',
            currentFeed: ''
        }
    }
    //does it exist in local storage?, if yes then set it to state
    componentWillMount() {
        localStorage.getItem('feed') && this.setState({
            feed: JSON.parse(localStorage.getItem('feed')),
            input: ''
        })
    }

    // loads data into state
    //checks if data exist
    //if not then it fetches the data 
    // componentDidMount() {
    //     if (localStorage.getItem('users')) {
    //         this.addNewUser();
    //     }
    //     else {
    //         console.log('using data from local storage')
    //     }
    // } 


    clickingFeed = (e, idx) => {
        // console.dir(e.target)
        const currentFeed = this.state.feed[idx]

        let array = [...this.state.feed]; 
        let index = array.indexOf(currentFeed)
        console.log(idx)
        if (idx !== -1) {
            array.splice(idx, 1);
            this.setState({ feed: array });
    }}


    // if(this.state.user==e.target.innerHTML){
    //    style{{color:"blue"}}
    // }
    //if not selected add to the current
    // this.setState({user:e.target.innerHTML, bgColor:'blue'})  


onFeedChange = (e) => {
    console.log(e.target.value)
    this.setState({ input: e.target.value })
}

addFeeder = (e) => {
    console.log('keystroke', e)
    e.preventDefault();
    if (this.state.feed.includes(this.state.input)) {
        return alert(`Feed ${this.state.input} is already in list`)
    }
    //   let newUser = this.state.users.push(this.state.input)

    let copiedFeed = [...this.state.feed]

    copiedFeed.push(this.state.input)

    this.setState({ feed: copiedFeed })

}
//before rendering and after the function
componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('feed', JSON.stringify(nextState.feed))
}


render() {
    console.log(this.state)
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <div><h3>Create a New Explore Feed</h3></div>
                    <input type='text' placeholder='feed' onChange={this.onFeedChange} /><button onClick={this.addFeeder}>add</button>

                </div>

                <div className='col-6'>
                    <div><h3>Explore Feed List</h3></div>
                    <ul class="list-group">
                        {
                            this.state.feed.map((feed, i) => {
                                let activeFeed = " ";
                                if (feed === this.state.currentFeed) activeFeed = "active"
                                return <li key={i} className={"list-group-item d-flex justify-content-between align-items-center"} >{feed}
                                    <span class={"badge badge-primary badge-pill " + activeFeed} onClick={(e) => this.clickingFeed(e, i)} >x</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
            


        </>
    )
}

}
export default FeedEditor;