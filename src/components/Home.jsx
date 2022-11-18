import React from "react";
import pic from "../image/riadhpic.png"
export default function () {
    return (<>
        <section id="home" >
            <div className="home-left">
                <div className="container">
                    <h1>I'm <span>Riadh Korchid</span></h1>
                    <h2><span>Frontend</span> Developer</h2>
                    <p>I will help you create an amazing website for your business!</p>
                    <div className="portfolio">Portfolio</div>
                </div>
                <div>     
                </div>
            </div>
            <div className="home-right">
                <img src={pic} />
            </div>
        </section>
    </>)
}