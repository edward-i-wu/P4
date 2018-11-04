import React, { Component } from 'react';

class VidCard extends Component{ 

    render(){
        let {videoCard}=this.props;
        return (
   
            <figure className="card card-figure">
                <div className="card-container">
                    <img className="card-container__image" src={`${videoCard.imgSrc}`} />
                    <div className="card-container__length">{videoCard.length} </div>
                </div>
                <figcaption>
                    <ul className="card-ul">
                        <li className="card-ul__title">{videoCard.title}</li>
                        <li className="card-ul__channel">{videoCard.channel}</li>
                        <li className="card-ul__views">{videoCard.views}</li>
                    </ul>
                </figcaption>
            </figure>
        );
    }
}

export default VidCard;