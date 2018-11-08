import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
        // each outer will have a display flex 
      <div>
          <div className={'headerRight__circleCrop'}>
            <img className={"headerRight__circleCrop--circleImg"} src='/Assets/Images/john_gibbons.jpg'/>
          </div>
          <div className={'comment-text'}>
                
          </div>
      </div>
    )
  }
}
