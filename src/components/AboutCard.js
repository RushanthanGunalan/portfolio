import "./AboutCard.css";
import Profile from "../assets/Profile.jpg"
import { FaForward } from "react-icons/fa";
import React from "react";

const AboutCard = () => {
    return ( 
            <section className="about">
                <h1 className="about-heading">
                    Details
                </h1>
                <div className="about-Container">
                    <div className="Aboutme">
                        <div className="about-img">
                            <img src={Profile} alt=""/>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="about-cards">
                            <article className="about-card">
                                <FaForward/>
                                <h1 className="h1">Work Experience</h1>
                                <p>
                                    8+ Months Experience
                                </p>
                            </article>
                            <article className="about-card">
                                <FaForward/>
                                <h1 className="h1">Education</h1>
                                <p>BSc (Hons) Computer Science & Software Engineering
                                   <br/>Class - Second Class Upper Division
                                   <br/>University of Bedfordshire, UK Affiliated with SLIIT Academy</p>
                                <p>HND in Information Technology
                                   <br/>Class - Second Class Upper Division</p>
                            </article>
                            <article className="about-card">
                                <FaForward/>
                                <h1 className="h1">Technical Skills</h1>
                                <ul style={{marginRight: 30}}>
                                <li className="list">React</li>
                                <li className="list">Typescript</li>
                                <li className="list">SCSS</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
     );
}

export default AboutCard;