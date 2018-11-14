import React, { Component } from 'react';
import Search from './Search.js';
import HeaderRight from './HeaderRight';
import {Link} from 'react-router-dom';
import './Header.css'


class Header extends Component{
    render(){
        return(
            <header className={"header margin"}>
                    <Link to="/video/"><img className={"header__logo"} src="/Assets/Icons/BrainFlix Logo.svg"/></Link>
                    <Search/>
                    <HeaderRight />
            </header>
        )
    }
}

export default Header;