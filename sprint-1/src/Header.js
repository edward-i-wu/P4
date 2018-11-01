import React, { Component } from 'react';
import Search from './Search';
import HeaderRight from './HeaderRight';

import './Header.css'

import headercss from './Header.css';
class Header extends Component{
    render(){
        return(
            <header className={"header margin"}>
                    <img className={"header__logo"} src="./Assets/Icons/BrainFlix Logo.svg" datatype="svg"/>
                    <Search/>
                    <HeaderRight />
            </header>
        )
    }
}

export default Header;