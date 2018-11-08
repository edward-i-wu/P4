import React, { Component } from 'react';
import Search from './Search';
import HeaderRight from './HeaderRight';
import {Link} from 'react-router-dom';

import './Header.css'

import headercss from './Header.css';
class Header extends Component{
    render(){
        return(
            <header className={"header margin"}>
                    <Link to="/video/fa72276e-b9f4-4556-a45d-c11605a91e14?api_key=fac7d278-2d40-4d95-bd4f-146400d00a5c"><img className={"header__logo"} src="/Assets/Icons/BrainFlix Logo.svg"/></Link>
                    <Search/>
                    <HeaderRight />
            </header>
        )
    }
}

export default Header;