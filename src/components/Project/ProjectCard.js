
import React, { useState } from "react";
import "./ProjectCardStyles.css"


import { NavLink } from "react-router-dom"
import PopupCarousel from "../PopupC/PopupCarousel";

const ProjectCard = (props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };


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
                        <button onClick={openPopup} className="btn">
                            View
                        </button>
                        <button to={props.view} className="btn">
                            Source
                        </button>
                    </div>
                </div>
                {/* PopupCarousel component */}
                    <PopupCarousel
                        isOpen={isPopupOpen}
                        onRequestClose={closePopup}
                        images={props.carouselImages} // Add your carousel image URLs as a prop
                    />
    </div>
  )
}

export default ProjectCard