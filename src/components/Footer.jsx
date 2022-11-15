import React from "react";
import {SiFacebook} from "react-icons/si"
import {SiLinkedin}from "react-icons/si"
import {SiGithub}from "react-icons/si"
export  default  function () {
    return (
      <footer>
        <p>for more information , Follow me on :</p>
        <div className="icons">
        <a href=""><SiFacebook className="icon"/></a>
        <a href=""><SiLinkedin className="icon"/></a>
        <a href=""><SiGithub className="icon"/></a>
       </div>
       <p>Copyright &copy; Riadh Korchid All rights reserved</p>
      </footer>
    )
}