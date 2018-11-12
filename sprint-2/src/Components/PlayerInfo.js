import React, {Component} from 'react';

class PlayerInfo extends Component{

    render(){

        return(
            <div className="vid-review">
                <div>{this.props.views+" views"}</div>
                <div className="vid-review__opinions">
                    <div><img src="/Assets/Icons/Thumbs Up.svg"/> {this.props.likes}  </div>
                    <div><img src="/Assets/Icons/Thumbs Down.svg"/>  {this.props.dislikes}</div>
                    <div><img src="/Assets/Icons/Share.svg" />SHARE</div> 
                </div>
            </div>
        );
    }
}

export default PlayerInfo;