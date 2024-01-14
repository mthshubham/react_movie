import React from "react";
import './Buttons.css';

function Buttons(props)
{
    return(
        <>
            <a href="{props.link}">{props.name}</a>
        </>
    );
}


export default Buttons;