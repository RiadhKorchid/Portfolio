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
import {SiMongodb} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"

export default function () {
    return (
        <div className="skills">
            <div className="skills-header">
                <div className="h1">Skills</div>
                <div className="h2">Technologies i've used</div>
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
                    <FaGitAlt className="icon"/>
                    <SiMongodb className="icon" />
                </div>
                <div className="skills-right">
                    <h1>More about me</h1>
                    <p>My name is Riadh korchid and I’m a Frontend Developer from tunisia .
                         I really love making responsive websites .
                         Below are the technologies I’m most familiar with but I’m always open to learning new technologies.</p>
                </div>
            </div>
        </div>
    )

}