import React from "react";
import movie from "../movie.json";
import Content from "./Content";

function Movie(){
    var bool=false;
    if(bool===false)
    {
    return(
        <>
            <div className="Movie" style={{display:"flex",flexWrap:"wrap",flexDirection:"row", justifyContent:"space-around",alignContent:"space-evenly",backgroundColor:"black"}}>
                {
                    movie.map(
                        (element,index)=>{
                            
                            return(
                                <Content 
                                key={index}
                                image={element.Poster}
                                title={element.Title}
                                year={element.Year}
                                imdb={element.imdbID}
                                />
                            )
                        }
                    )
                }
            </div>
        </>
    );
}




}

export default Movie;