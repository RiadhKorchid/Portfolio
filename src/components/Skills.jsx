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
        <section className="skills" id="skills">
            <div className="skills-header">
                <div className="h1">Skills</div>
                <div className="h2">Technologies i've used</div>
            </div>
            <div className="skills-body">
                <div className="skills-left" color="">
                    <FaHtml5 className="icon" color="#F25320"/>
                    <FaCss3Alt className="icon" color="#279FD5" />
                    <FaJs className="icon" color="#E4D04B"/>
                    <FaReact className="icon" color="#66D2EF"/>
                    <FaNodeJs className="icon" color="#4F9640"/>
                    <FaSass className="icon" color="#D16E9F"/>
                    <SiTypescript className="icon" color="#00A7F2"/>
                    <SiRedux className="icon" color="#7046B2"/>
                    <FaGitAlt className="icon" color="#E44C30"/>
                    <SiMongodb className="icon" color="#449E45" />
                </div>
                <div className="skills-right">
                    <h1>About me</h1>
                    <p>My name is Riadh korchid and I’m a Frontend Developer from tunisia .
                         I really love making responsive websites .
                         Below are the technologies I’m most familiar with but I’m always open to learning new technologies.</p>
                </div>
            </div>
        </section>
    )

}