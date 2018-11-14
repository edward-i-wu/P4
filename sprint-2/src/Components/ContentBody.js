import React, { Component } from 'react';
import Video from "./Video";
import VidList from "./VidList";
import {withRouter} from "react-router";

const api_key = '?api_key=fac7d278-2d40-4d95-bd4f-146400d00a5c';
const baseURL = 'https://project-2-api.herokuapp.com/';
//
const videos = 'videos/';




class ContentBody extends Component{
    //create object of videos in an array to be passed to lower elements as props
    //let object;

    state={ //array of video information objects
            vidArray:[],
            //the return json of the current video 
            currentVid:{},
            //id of the default video
            defaultVid:'1edc16bd-1bad-418b-bd40-c72ddd926672'};
    
    componentDidMount(){
        let { match } = this.props;
        //get request for vid array
        fetch(`${baseURL}${videos}${api_key}`).then(res=> 
            res.json()).then(res=>this.setState({vidArray:res})
            );
      
        
        if(match.params.vidId){
            this.updateVideo(match.params.vidId);
        }else{
            this.updateVideo(this.state.defaultVid);
        }   
    }

    // componentWillReceiveProps(){
    //     this.updateVideo(this.props.match.vidId);
    // }

    //this function to update video on click
    //passed down to each VidCard to activate
    updateVideo= (newId)=>{
        fetch(`${baseURL}${videos}${newId}${api_key}`)
                .then((current)=> {return current.json()})
                .then((current)=>{this.setState({currentVid:current});
                                });
    }
    
    render(){        
        return(
            //insert the current vid afterwards
            <div className="video-container margin" >
                <Video current={this.state.currentVid} {...this.props}></Video>
                <VidList newVidHandler={newId =>this.updateVideo(newId)} vidArray={this.state.vidArray} current={this.state.currentVid}></VidList>
            </div>
        );

    }
}

export default withRouter(ContentBody);