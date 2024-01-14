import React from "react";
import './content.css';

function Content(props){
    return(
        <>
        <div className="content">
            <img src={props.image} alt={props.title}/>
            <p>Title: {props.title}</p>
            <p>Year: {props.year}</p>
            <p>imdb ID: {props.imdb} </p>
            <a href="https://cinehub.wtf/movie/268">Watch</a>
        </div>
        </>
    );
}

export default Content;