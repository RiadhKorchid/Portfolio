import React from "react";
import easybankImage from "../image/easybank-landing-page-image.png";
import carentallImage  from "../image/rentalcars-image.png";
import productMainPageImage from "../image/product-page-main.png";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa"
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
        <section className="projects" >
            <div className="projects-header" data-aos="fade-down"   data-aos-duration ="700">
                <div className="h1">Projects</div>
                <div className="h2">Things i've created </div>
            </div>
            <div className="projects-body" >
                <div className="project" data-aos="fade-down" data-aos-duration ="700">
                    <img src={easybankImage} alt="" />
                    <h1>Easybank Landing Page</h1>
                    <p>A challenge from a well-known practise website , frontend Mentor . I used the following technologies :
                    </p>
                    <div className="technologies">
                        <FaHtml5 className="icon" color="#F25320" />
                        <FaCss3Alt className="icon" color="#279FD5" />
                        <FaJs className="icon" color="#E4D04B" />
                        <FaReact className="icon" color="#66D2EF" />
                    </div>
                    <div className="icons">
                      <a href="https://easybank-landing-page-by-riadh.netlify.app/">  <FaEye className="icon" /></a>
                        <a href="https://github.com/RiadhKorchid/easybankLandingPage.git"><FaGithub className="icon"  /></a>
                    </div>
                </div>
                <div className="project" data-aos="fade-down" data-aos-duration ="700">
                    <img src={carentallImage} alt="" />
                    <h1>Rental cars</h1>
                    <p> in this project i tried to clone an E-commerce platform , rental cars . i used  the following technologies  :
                    </p>
                    <div className="technologies" >
                        <FaHtml5 className="icon" color="#F25320" />
                        <FaCss3Alt className="icon" color="#279FD5" />
                        <FaJs className="icon" color="#E4D04B" />
                        <FaReact className="icon" color="#66D2EF" />
                    </div>
                    <div className="icons">
                       <a href="https://rentalcars-by-riadh.netlify.app/"> <FaEye className="icon" /></a>
                        <a href="https://github.com/RiadhKorchid/RentalCars.git"><FaGithub className="icon" /></a>
                    </div>
                </div>
                <div className="project" data-aos="fade-down" data-aos-duration ="1000">
                    <img src={productMainPageImage} alt="" />
                    <h1>Product Main Page </h1>
                    <p> in this project i tried to clone an E-commerce platform , Sneakers Store . i used  the following technologies  :
                    </p>
                    <div className="technologies">
                        <FaHtml5 className="icon" color="#F25320" />
                        <FaCss3Alt className="icon" color="#279FD5" />
                        <FaJs className="icon" color="#E4D04B" />
                        <FaReact className="icon" color="#66D2EF" />
                    </div>
                    <div className="icons">
                      <a href="https://product-main-page.netlify.app/">  <FaEye className="icon" /></a>
                      <a href="https://github.com/RiadhKorchid/E-Commerce-product-page.git"> <FaGithub className="icon" /></a>
                    </div>
                </div>

            </div>
        </section>
    )
}