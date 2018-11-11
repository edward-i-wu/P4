import React, { Component } from 'react';
import Comment from './Comment.js';

export default class CommentsSection extends Component {


  render() {
    //map the comments into an array of elements to display 
    
    let{comments} = this.props;
    let renderedComments = [];
    console.log("comment-section");

    if(comments){
        renderedComments= comments.map(item=>{return <Comment key={item.id} comment={item}/>});
    }

    return (
      <div className="comments-section">
        {renderedComments}
      </div>
    )
  }
}
