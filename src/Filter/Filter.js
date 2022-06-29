import React, { useContext } from "react";
import "./Filter.css";
import Context from "../context";


function Filter(props) {

    return (
        <button type="submit" onClick={() => props.filter()}>Filter</button>
    )
}

export default Filter