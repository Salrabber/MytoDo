import React, { useContext } from "react";
import "./Button.css";


function Button(props) {

    return (
        <button type="submit" onClick={() => props.action()}>{props.name}</button>
    )
}

export default Button