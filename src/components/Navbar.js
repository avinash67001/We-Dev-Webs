import React from "react";
import "./style.css";
import logo from "../Images/wedevwebs logo.png"

function Navbar() {
  return (
    <div>
      <nav className="bg-warning d-flex justify-content-around align-items-center" style={{height:"17vh",position:"sticky", top:"0",borderBottomLeftRadius:"35px", borderBottomRightRadius :"35px"}}>
        <img src={logo} alt="wedevwebs logo" href="/"/>
        <div className="pages">
        <a className="mx-4" href="/">Home</a>
        <a className="mx-4" href="/">About Us</a>
        <a className="mx-4" href="/">Services</a>
        <a className="mx-4" href="/">Blog</a>
        <a className="mx-4" href="/">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
