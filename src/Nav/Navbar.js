import './Navbar.css';
import React from "react";
import Buttons from "./Buttons";
import Search  from '../search/Search';


function Navbar(){
    return (
        <>
            <div className="navbar">
            <Buttons link="/" name="Home"/> 
            <Buttons link="/" name="All"/> 
            <Buttons link="/" name="Anime"/>
            <Buttons link="/" name="Tv/serial"/>  
            <Buttons link="/" name="Hollywood"/>
            <Buttons link="/" name="Bollywood"/>
            <Search/>
            </div>
        </>
    );
}

export default Navbar;