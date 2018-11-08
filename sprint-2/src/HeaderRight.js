import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HeaderRight extends Component{
    render(){
        return (
            <div className={"headerRight"}>
                <Link className='headerRight__upload' to="/upload"><img className={"headerRight__upload"} src='/Assets/Icons/Content Upload.svg'/></Link>
                <div className={'headerRight__circleCrop'}>
                    <img className={"headerRight__circleCrop--circleImg"} src='/Assets/Images/john_gibbons.jpg'/>
                </div>
            </div>
        )
    }

}
export default HeaderRight;