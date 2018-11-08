import React, {Component} from 'react';
import './Video.css';
import PlayerInfo from './PlayerInfo'
import ChannelInfo from './ChannelInfo'
import CommentsSection from './CommentsSection';

class Video extends Component{

    render(){
        let {current}=this.props;
        let page;
        if(current!==undefined){
           page= 
                <div className="video"> 
                <figure className="video-figure">
                <video className="player" poster={current.image} controls src={`${current.video}?api_key=fac7d278-2d40-4d95-bd4f-146400d00a5c`}></video>
                <figcaption className="player__title">{current.title}</figcaption>
                <figcaption> <PlayerInfo likes={current.thumbsUp} dislikes={current.thumbsDown} views={current.views}/> </figcaption>
            </figure>
            <ChannelInfo subs={current.subscriberCount} name={current.channel} pubdate={new Date(current.timestamp)} description={current.description}/>
            {/* <CommentsSection comments={this.current.comments}></CommentsSection> */}
            </div>
        }else{
            page= <div className="video"></div>
        }
        

        return (
            page
        )
    }
}

export default Video;