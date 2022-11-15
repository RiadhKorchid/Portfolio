import React from "react";
import{BsFillTelephoneFill} from'react-icons/bs';
import {MdEmail}from "react-icons/md"
import{MdLocationOn}from "react-icons/md"
export default function () {
    return (<div className="contact">
        <div className="contact-header">
            <div className="h1">Contact</div>
            <div className="h2"><div></div> Get in touch <div></div></div>
        </div>
<div className="contact-body">
        <div className="contact-left">
            <div className="name-surname"> 
                <input type="text" placeholder="Enter name..." />
                <input type="text" placeholder="Enter object..." />
                
            </div>
            <input type="email" placeholder="Enter email..." />
            <textarea name="message" id="message"  rows="6" placeholder="Enter message..."></textarea>
            <button>send message</button>
        </div>
        <div className="contact-right">
            <BsFillTelephoneFill className="icon"/> <p>+216 99 312 335</p>
            <MdEmail className="icon"/> <p>riadhkourchid@gmail.com</p>
            <MdLocationOn className="icon"/><p>Tunisia</p>
        </div>
</div>
    </div>
    )
}