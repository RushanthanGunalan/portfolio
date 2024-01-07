
import React from "react"
import "./ProjectCardStyles.css"


import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image" className="img"/>
            <h2 className="project-title">
                {props.title}
            </h2>
                <div className="pro-details">
                    <p className="p">
                        {props.text}
                    </p>
                    <div className="btns">
                        <NavLink to={props.view} className="btn">
                            View
                        </NavLink>
                        <NavLink to={props.view} className="btn">
                            Source
                        </NavLink>
                    </div>
                </div>
    </div> 
  )
}

export default ProjectCard