import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";


const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading={"About Me"} text={"Get to Know"}/>
    <AboutCard/>
    <Footer/>
    </div>
  )
}

export default About