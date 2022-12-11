import React from "react";
import pic from "../image/riadhpic.png"
export default function () {
    return (<>
        <section id="home"  >
            <div className="home-left" data-aos="fade-left" data-aos-duration="1000">
                <div className="container">
                    <h1>I'm <span>Riadh Korchid</span></h1>
                    <h2><span>Frontend</span> Developer</h2>
                    <p>I will help you create an amazing website for your business!</p>
                    <a href="..\image\riadh-korchid-CV.pdf"><div className="portfolio">Portfolio</div></a>
                </div>
                <div>     
                </div>
            </div>
            <div className="home-right" data-aos="fade-right" data-aos-duration="1000">
                <img src={pic} />
            </div>
        </section>
    </>)
}