import React from "react";
import pic from "./riadhpic.png"
export default function () {
    return (<>
        <section id="home" >
            <div className="section-left">
                <div className="container">
                    <h1>I'm <span>Riadh Korchid</span></h1>
                    <h2><span>Frontend</span> Developer</h2>
                    <p>I will help you create an amazing website for your business!</p>
                    <div className="portfolio">Portfolio</div>
                </div>
                <div>
                    
                </div>

            </div>
            <div className="section-right">
                <img src={pic} />
            </div>
            <div className="triangle"></div>
        </section>

    </>)
}