import React from 'react';
import './video.css';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div class="main" >
                    <div class="row" >
                        <h2>Espn First Take</h2>
                        <div class="col-sm" >
                        </div>
                    </div>
                </div>
                   
                   <div>
                    <div class="container">
                        <div class="dropdown-menu"> <h2> '' </h2></div>
                        <div class="row">
                            <div class="col-sm">
                                <div class="side">
                                    <h2>Feed list</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}

export default Video;