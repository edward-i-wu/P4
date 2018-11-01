import React, { Component } from 'react';

class HeaderRight extends Component{
    render(){
        return (
            <div className={"headerRight"}>
                <img className={"upload"} src='./Assets/Icons/Content Upload.svg'/>
                <div className={'circleCrop'}>
                    <img className={"circleImg"} src='./Assets/Images/john_gibbons.jpg'/>
                </div>
            </div>
        )
    }

}
export default HeaderRight;