import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const {budget, setBudget} = useContext(AppContext);

    return (
        <div className="alert alert-secondary">
            <span>Budget:</span>
            <input value={budget} onChange={event => {setBudget(event.target.value)}} style={{opacity:0.3, color:"black"}} type="text" maxlength="5"/>
        </div>
    );
}

export default Budget;