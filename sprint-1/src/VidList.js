import React, { Component } from 'react';
import VidCard from './VidCard.js';

class VidList extends Component{ 
    
    render(){

        let { vidArray } = this.props;
        console.log(this.props);
        console.log(vidArray);
        // let cards = vidArray.map((item)=>{<VidCard videoCard={item} />});
        let cards = <VidCard videoCard={vidArray[0]} />
        return (
            <div className="card-list">
                <h4>Up Next</h4>
                {cards}
            </div>
        );
    }
}

export default VidList;