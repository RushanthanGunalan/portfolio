import "./HeroImgStyles.css"
import Coding from "../assets/Coding.jpg"

import { Link } from "react-router-dom"
import React from "react"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Coding} alt="IntroImg"/>
      </div>
      <div className="content">
        <p className="p">Hi, I'm a Front-End-Developer</p>
        <h1 className="h1">React Developer</h1>
      <div>
        <Link to="/project" className="btn">Project</Link>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default HeroImg