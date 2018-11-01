import React, {Component} from 'react';
import './Video.css';

class Video extends Component{

    render(){

        return (
            <figure className="video-figure">
                <video className="player" controls src={'./Assets/Brainstation Sample Video.mp4'}></video>
                <figcaption>Jose Bautista hammers go-ahead three-run shot in ALDS Game 5, delivers epic bat flip</figcaption>
            </figure>
        )
    }
}

export default Video;