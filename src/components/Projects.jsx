import React from "react";
import Project from "./Project"
export default function () {
    return (
        <div className="projects">
            <div className="projects-header">
                <div className="h1">Projects</div>
                <div className="h2">Things i've created </div>
            </div>
            <div className="projects-body">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}