import React, {Component} from 'react';
import "./ChannelInfo.css";

class ChannelInfo extends Component{

    render(){
        let {name,pubdate,description,subs}=this.props;
        return (
            <div className={'channel-info'}>
                <div className={'channel-info__circleCrop'}>
                    <img className={"channel-info__circleCrop--circleImg"} src='/Assets/Images/john_gibbons.jpg'/>
                </div>
                <div className={'channel-text'}>
                    <div className={'channel-text__name'}>
                        <ul>
                            <li>{name}</li>
                            <li>{"Uploaded on 04/20/2018"}</li>
                        </ul>
                        <button className="channel-text__subbutton"> SUBSCRIBE  <span>{subs}</span>  </button>
                    </div>
                    {description}
                </div>
            </div>
        )
    }
}

export default ChannelInfo;