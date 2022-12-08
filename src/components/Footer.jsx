import React from "react";
import {SiFacebook} from "react-icons/si"
import {SiLinkedin}from "react-icons/si"
import {SiGithub}from "react-icons/si"
export  default  function () {
    return (
      <footer>
        <p>for more information , Follow me on :</p>
        <div className="icons">
        <a href="https://www.facebook.com/kourchid.riadh.1"><SiFacebook className="icon"/></a>
        <a href="https://www.linkedin.com/in/riadh-korchid-1b7396239/"><SiLinkedin className="icon"/></a>
        <a href="https://github.com/RiadhKorchid"><SiGithub className="icon"/></a>
       </div>
       <p>Copyright &copy; Riadh Korchid All rights reserved</p>
      </footer>
    )
}