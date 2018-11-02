import React, { Component } from 'react';

class VidCard extends Component{ 

    render(){
        let {videoCard}=this.props;
        return (
        <div className="card-container">
            <figure className="card-figure">
                <img className="card-image" src="./Assets/Images/920x920.jpg" />
                <figcaption>
                    <ul className="card-ul">
                        {/* contents should be filled by props */}
                        <li className="card-image__title">{videoCard.title}</li>
                        <li className="card-image__channel">{videoCard.channel}</li>
                        <li className="card-image__views">{videoCard.views}</li>
                    </ul>
                </figcaption>
            </figure>
        </div>
        );
    }
}

export default VidCard;