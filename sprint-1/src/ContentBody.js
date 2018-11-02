import React, { Component } from 'react';
import Video from "./Video";
import VidList from "./VidList";

function vid(title,channel, views,comments,imgSrc){
    this.title = title;
    this.channel=channel;
    this.views= views;
    this.comments=comments;
    this.imgSrc = imgSrc;
}



class ContentBody extends Component{
    //create object of videos in an array to be passed to lower elements as props
    //let object;

    render(){

        //hardcoded array 
        let vidArray=[];

        //hardcoded data
        let vid1= new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning",
                        "MLB","1.1M views",["wow","ye-haw"],"./Assets/Images/920x920.jpg");

        vidArray.push(vid1);
        //index of current video
        let currentVid = Math.round(Math.random()*8);
        currentVid = vidArray[currentVid];
        vidArray = vidArray.filter((item,i)=> i!==currentVid);
//
        return(
            <div className="video-container margin">
                <Video current={currentVid}></Video>
                <VidList vidArray={vidArray}></VidList>
            </div>
        );

    }
}

export default ContentBody;