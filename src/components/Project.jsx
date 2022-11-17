import React from "react";
import {FaGithub} from"react-icons/fa";
import {FaEye} from "react-icons/fa"
import image from "../image/test.png"
export default function ({react})
{
    return ( 
<div className="project">
    <img src={image} alt="" />
    <h1>Rental cars</h1>
    <p> in this project i tried to clone an E-commerce platform , rental cars . i used  the following technologies  :
    </p>
    <div className="technologies">
    </div>
    <div className="icons">
        <FaEye  className="icon" />
        <FaGithub className="icon" />
    </div>
</div>
    )
}