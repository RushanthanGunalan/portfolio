
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import ProjectWork from '../components/ProjectWork'
import React from 'react'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Some of my works"/>
      <ProjectWork/>
      <Footer/>
    </div>
  )
}

export default Project