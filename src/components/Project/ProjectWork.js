
import "./ProjectCardStyles.css"

import ProjectCard from "./ProjectCard"
import ProjectCardData from "./ProjectCarddata"
import React from "react"

import DashBoard from "../../assets/DashBoard.jpg"
import DashBoard02 from "../../assets/DashBoard02.jpg"
import DashBoard03 from "../../assets/DashBoard03.jpg"


const ProjectWork = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
            <div className="project-container">
                {ProjectCardData.map((val,ind) => {
                    return(
                        <ProjectCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            carouselImages={[
                                DashBoard,
                                DashBoard02,
                                DashBoard03,
                              ]}
                        />
                    )
                })}
            </div>
        
    </div>
  )
}

export default ProjectWork