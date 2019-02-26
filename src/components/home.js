import React from 'react';
import './home.css'


class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div className='home'>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4"> Steve's Personal Feed</h1>
                        </div>
                    </div>

                </div>

            </>
        )
    }

}
export default Home;