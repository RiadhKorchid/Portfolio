import React from "react";
import { FaNodeJs } from "react-icons/fa";

export default function () {
    return (
        <nav>
            <div className="nav-left">
               <FaNodeJs className="icon"/>
                <p> Riadh<span> Korchid</span></p>
            </div>
            <div className="nav-right">
                <a href="" id="Home">Home</a>
                <a href="" id="Skills">Skills</a>
                <a href="" id="Projects">Projects</a>
                <a href="" id="Contact">Contact</a>
            </div>
        </nav>
    )
}