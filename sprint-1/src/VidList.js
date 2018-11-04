import React, { Component } from 'react';
import VidCard from './VidCard.js';

class VidList extends Component{ 
    
    render(){

        let { vidArray } = this.props;
        let cards = vidArray.map((item)=>{return <VidCard videoCard={item} />});
        return (
            <div className="card-list">
                <h4>Up Next</h4>
                {cards}
            </div>
        );
    }
}

export default VidList;