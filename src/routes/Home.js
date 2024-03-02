
import Navbar from '../components/Navbar/Navbar'
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer/Footer"
import React from 'react'
import SkCarousal from '../components/SkillCarousal/SkCarousal'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg/>
    <SkCarousal/>
    <Footer/>
    </div>
  )
}

export default Home