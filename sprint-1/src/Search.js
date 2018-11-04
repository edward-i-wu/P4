import React, { Component } from 'react';

class Search extends Component{

    render(){
        return(
            <div className={"search-container"}>
                <form className={"form"}>
                        <input placeholder={"Search"} className={"search searchInput"}/>
                        <button className={"search searchButton"}><img src="./Assets/Icons/Search.svg"/></button>
                </form>
            </div>
        )
    }
}

export default Search;