import React from "react";
import "./Button.css";


function Button(props) {

    return (
        <button className="btn" type="submit" onClick={() => props.action()}>{props.name}</button>
    )
}

export default Button