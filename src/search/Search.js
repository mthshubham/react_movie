import React from "react";
import './Search.css';
import search from "./search.png";

function Search(){
    return(
        <>
        <div className="wrapper">
            <input type="search" placeholder="&nbsp;Search"/>
            <button>
                <img src={search} alt="Search"/>
            </button>
        </div>
        </>
    )
}

export default Search;