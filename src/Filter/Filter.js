import React, { useContext } from "react";
import "./Filter.css";
import Context from "../context";


function Filter() {
    const {filterUp} = useContext(Context);

    function filter() {
        
    }

    return (
        <button type="submit" onClick={filter}>Filter</button>
    )
}

export default Filter