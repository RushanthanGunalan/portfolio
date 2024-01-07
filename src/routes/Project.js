
import Navbar from '../components/Navbar/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer/Footer'

import React from 'react'
import ProjectWork from '../components/Project/ProjectWork'

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