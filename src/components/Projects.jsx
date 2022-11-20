import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa"
import easybank from "../image/easybank.jpg"
import rentalcars from "../image/rentalcars.jpg"
import { FaReact } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaSass } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiFigma } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
export default function () {
    const technologies = [true, false, true, true, true];
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <div className="h1">Projects</div>
                <div className="h2">Things i've created </div>
            </div>
            <div className="projects-body">
                <div className="project">
                    <img src={easybank} alt="" />
                    <h1>Easybank Landing Page</h1>
                    <p> in this project i tried to clone an E-commerce platform , rental cars . i used  the following technologies  :
                    </p>
                    <div className="technologies">
                        <FaHtml5 className="icon" color="#F25320" />
                        <FaCss3Alt className="icon" color="#279FD5" />
                        <FaJs className="icon" color="#E4D04B" />
                        <FaReact className="icon" color="#66D2EF" />
                    </div>
                    <div className="icons">
                      <a href="https://spiffy-otter-42d24c.netlify.app/">  <FaEye className="icon" /></a>
                        <FaGithub className="icon" />
                    </div>
                </div>
                <div className="project">
                    <img src={rentalcars} alt="" />
                    <h1>Rental cars</h1>
                    <p> in this project i tried to clone an E-commerce platform , rental cars . i used  the following technologies  :
                    </p>
                    <div className="technologies">
                        <FaHtml5 className="icon" color="#F25320" />
                        <FaCss3Alt className="icon" color="#279FD5" />
                        <FaJs className="icon" color="#E4D04B" />
                        <FaReact className="icon" color="#66D2EF" />
                    </div>
                    <div className="icons">
                        <FaEye className="icon" />
                        <FaGithub className="icon" />
                    </div>
                </div>

            </div>
        </section>
    )
}