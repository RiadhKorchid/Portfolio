import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";

export default function () {
    function show() {
 document.querySelector(".mobile-list").classList.toggle("clicked");
 document.querySelector(".bars").classList.toggle("bewhite")

    }

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 0) {
                document.querySelector("nav").classList.add("sticky");
            } else {
                document.querySelector("nav").classList.remove("sticky");
            }
        }

        document.addEventListener("scroll", handleAnimation);

        return () => { document.removeEventListener("scroll", handleAnimation) }
    }, [])

    return (
        <nav>
            <div className="nav-left">
                <FaNodeJs className="icon" />
                <p> Riadh<span> Korchid</span></p>
            </div>
            <div className="desktop-list">
                <a href="#home" id="Home">Home</a>
                <a href="#skills" id="Skills">Skills</a>
                <a href="#projects" id="Projects">Projects</a>
                <a href="#contact" id="Contact">Contact</a>
            </div>
            <div className="mobile-list">
                <a href="#home" id="Home">Home</a>
                <a href="#skills" id="Skills">Skills</a>
                <a href="#projects" id="Projects">Projects</a>
                <a href="#contact" id="Contact">Contact</a>
            </div>
            <div className="bars" onClick={show}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}
