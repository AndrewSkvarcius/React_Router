import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Color.css";

function Color ({hex, color}) {
    const navigate = useNavigate();
    if (!hex) {
    console.log(navigate)    
    navigate("/colors");

    }
    return (
        <div className="Color" style= {{backgroundColor: hex}}>
            <p>Dis is {color}</p>
            <p>Its the One!</p>
            <p>
                <Link to="/">GO BACK</Link>
            </p>
        </div>
    )
}
export default Color;