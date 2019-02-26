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
                            <h1 class="display-4">Mo's Feed</h1>
                            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>

                </div>

            </>
        )
    }

}
export default Home;