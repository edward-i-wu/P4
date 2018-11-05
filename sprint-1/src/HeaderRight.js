import React, { Component } from 'react';

class HeaderRight extends Component{
    render(){
        return (
            <div className={"headerRight"}>
                <img className={"headerRight__upload"} src='./Assets/Icons/Content Upload.svg'/>
                <div className={'headerRight__circleCrop'}>
                    <img className={"headerRight__circleCrop--circleImg"} src='./Assets/Images/john_gibbons.jpg'/>
                </div>
            </div>
        )
    }

}
export default HeaderRight;