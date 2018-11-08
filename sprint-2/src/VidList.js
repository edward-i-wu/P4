import React, { Component } from 'react';
import VidCard from './VidCard.js';
import {Link} from 'react-router-dom';
const api_key = '?api_key=fac7d278-2d40-4d95-bd4f-146400d00a5c';
const baseURL = 'https://project-2-api.herokuapp.com/';
//
const videos = 'videos/';
class VidList extends Component{ 
    
    render(){
        let { vidArray,current} = this.props;
        
        let cards = vidArray.map((item)=>{ if(current.id!==item.id){
                            return <Link to={`${item.id}${api_key}`}> 
                                        <VidCard videoCard={item} {...this.props}/>
                                    </Link>
                            }});
        
        return (
            <div className="card-list">
                <h4>Up Next</h4>
                {cards}
            </div>
        );
    }
}

export default VidList;