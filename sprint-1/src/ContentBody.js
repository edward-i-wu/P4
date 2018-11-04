import React, { Component } from 'react';
import Video from "./Video";
import VidList from "./VidList";

function vid(title,pubdate,description,channel, views,comments,imgSrc){
    this.title = title;
    this.channel=channel;
    this.pubdate=pubdate;
    this.description=description;   
    this.views= views;
    this.subs="1.2M";
    this.comments=comments;
    this.likes="6.9K"; 
    this.dislikes= "202";
    this.imgSrc = imgSrc;
    //hardcoded for now
    this.vidSrc = "./Assets/Brainstation Sample Video.mp4";
    this.length='4:45';
}



class ContentBody extends Component{
    //create object of videos in an array to be passed to lower elements as props
    //let object;

    render(){

        //hardcoded array 
        let vidArray=[];

        //hardcoded data
        vidArray.push( new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning","Oct 14, 2015", "10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
                        "MLB","1.1M views", ["wow","ye-haw"], "./Assets/Images/920x920.jpg"));
        vidArray.push(new vid("Jose Bautista hammers go-ahead three-run shot in ALDS Game 5, delivers epic bat flip","Oct 14, 2015", "10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","2,304,189 views",["wow","ye-haw"],"./Assets/Images/maxresdefault.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning",  "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views",["wow","ye-haw"],"./Assets/Images/american-league-wild-card-game---minnesota-twins-v-new-york-yankees-8119099224ebf5b5.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views",["wow","ye-haw"],"./Assets/Images/BASEBALL-MLB-HOU-LAD-.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views",["wow","ye-haw"],"./Assets/Images/Big-Read-Vladimir-Guerrero-Jr-Swings-470x264.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/donaldson.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/hqdefault.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/maxresdefault.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/PR6AGOQ7XREI5B7UMKM3KAGWFA.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/r241851_600x400_3-2.jpg"));
        vidArray.push(new vid("TEX @ TOR Gm5: Blue Jays take lead in wild 7th inning", "Oct 14, 2015","10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5",
        "MLB","1.1M views", ["wow","ye-haw"] ,"./Assets/Images/THKMOYWFLWJCPXQ.20170430201114.jpg"));

        
        //index of current video
        let currentVid = 1;
        let current = vidArray.splice(currentVid,1);
//
        return(
            <div className="video-container margin">
                <Video current={current[0]}></Video>
                <VidList vidArray={vidArray}></VidList>
            </div>
        );

    }
}

export default ContentBody;