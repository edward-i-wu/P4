import React, { Component } from 'react';
import './Comment.css';

const msInSecond = 1000; 
const msInMinute = msInSecond*60;
const msInHour = msInMinute*60;
const msInDay = msInHour*24;
const msInMonth= msInDay*30; //count 30 days as a month
const msInYear = msInDay*365;

const timeScale = [ {key: msInYear, value:"year"},
                    {key: msInDay, value: "day"},
                    {key: msInHour, value: "hour"},
                    {key: msInMinute, value: "minute"},
                    {key: msInSecond, value: "second"},
                    {key: -1, value:"Just a moment ago"}
                ];

function formatDate(date){
    let currentDate= new Date(); 
    //difference in miliseconds 
    let diff = currentDate - date; 
    //find the correct time scale using timeScale(a global array of objects with value of unit of time, and key the # of miliseconds in the unit)
    let timeUnit=timeScale.find(time=>{ return diff > time.key}); 

    //for comments less than 1 second, the key-value pair returned is {key:-1, value:"Just a moment ago"}
    //therefore just return the value 
    if(timeUnit.key===-1){
        return timeUnit.value; 
    }
    //convert to the unit of time we will display, and round to the nearest half 
    let ans = Math.round(diff/timeUnit.key); 
    //check if the value is singular, in order to display grammatically correct string
    if(ans===1){
        return ans + " " + timeUnit.value + " ago" 
    }else{
        return ans + " " + timeUnit.value + "s ago" 
    }

}


export default class Comment extends Component {
  render() {
    let {comment:item}= this.props;
    let cDate = new Date(item.timestamp);
    let formattedDate = `${cDate.getDate()}/${cDate.getMonth()+1}/${cDate.getFullYear()}` 
    return (
        
        // each outer will have a display flex 
      <div className="comment-container">
          <div className={'commentCrop'}>
            <img className={"commentCrop--circleImg"} src='/Assets/Images/john_gibbons.jpg'/>
          </div>
          <div className={'comment-text'}>
                <div className={'comment-text__name'}>{item.name}</div>
                <div className={'comment-text__date'}>{formattedDate}</div>
                <div className={'comment-text__comment'}>{item.comment}</div>
          </div>
      </div>
    )
  }
}
