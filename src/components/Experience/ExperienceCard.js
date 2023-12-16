// ExperienceCard.jsx
import './ExperienceCardStyles.css';
import experienceData from './ExperienceCardData';
import React from 'react';

const ExperienceCard = () => {
  return (
    <div className="exp-container">
      {experienceData.map((experience, index) => (
        <div className="exp-card" key={index}>
          <h2 className="exp-title">{experience.title}</h2>
          <div className="content-container">
            <div className="left-column">
              <p className="service-period">{experience.servicePeriod}</p>
            </div>
            <div className="right-column">
              <p className="p">{experience.text}</p>
              <div className="Skill-list">
                {experience.skills.map((skill, skillIndex) => (
                  <p className="list" key={skillIndex}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
