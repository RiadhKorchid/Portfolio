import React from "react";
import { FaReact } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaSass } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiFigma } from "react-icons/si"


export default function () {
    return (
        <div className="skills">
            <div className="skills-header">
                <div className="h1">Skills</div>
                <div className="h2">technologies i've used</div>
            </div>
            <div className="skills-body">
                <div className="skills-left">
                    <FaHtml5 className="icon"/>
                    <FaCss3Alt className="icon"/>
                    <FaJs className="icon"/>
                    <FaReact className="icon"/>
                    <FaNodeJs className="icon"/>
                    <FaSass className="icon"/>
                    <SiTypescript className="icon"/>
                    <SiRedux className="icon"/>
                    <SiFigma className="icon"/>
                </div>
                <div className="skills-right">
                    <h1>More about me</h1>
                    <p>My name is Korchid Riadh and i'm mainly a frontend web developer with over 2 years of experience .
                         I'm really passionate about making good-looking responsive websites from scratch .
                         I'm currently learning UI / UX Design ,
                         Backend Development and Mobile Development</p>
                </div>
            </div>
        </div>
    )

}