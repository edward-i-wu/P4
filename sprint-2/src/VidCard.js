import React, { Component } from 'react';
import {withRouter} from 'react-router';

class VidCard extends Component{ 

    switchVideo = (e)=>{
        console.log(this.props.videoCard.id);
        this.props.newVidHandler(this.props.videoCard.id);
    }

    render(){
        let {videoCard}=this.props;
        return (
   
            <figure className="card card-figure" onClick={this.switchVideo}>
                <div className="card-container">
                    <img className="card-container__image" src={videoCard.image} />
                    <div className="card-container__length">{videoCard.duration} </div>
                </div>
                <figcaption>
                    <ul className="card-ul">
                        <li className="card-ul__title">{videoCard.title}</li>
                        <li className="card-ul__channel">{videoCard.channel}</li>
                        <li className="card-ul__views">{videoCard.views} views</li>
                    </ul>
                </figcaption>
            </figure>
        );
    }
}

export default VidCard;