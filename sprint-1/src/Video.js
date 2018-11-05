import React, {Component} from 'react';
import './Video.css';
import PlayerInfo from './PlayerInfo'
import ChannelInfo from './ChannelInfo'

class Video extends Component{

    render(){
        let {current}=this.props;
        return (
            <div className="video">
                <figure className="video-figure">
                    <video className="player" controls src={'./Assets/Brainstation Sample Video.mp4'}></video>
                    <figcaption className="player__title">{current.title}</figcaption>
                    <figcaption> <PlayerInfo likes={current.likes} dislikes={current.dislikes} views={current.views}/> </figcaption>
                </figure>
                <ChannelInfo subs={current.subs} name={current.channel} pubdate={current.pubdate} description={current.description}/>
            </div>
        )
    }
}

export default Video;