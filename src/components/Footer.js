import "./FooterStyles.css"
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';


// ... (import statements)

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="row">
              <FaHome size={20} className="icon" style={{ color: "white" }} />
              <div className="description">
                <p>No. 57, Sri Maha Vihara Road, Kalubowila, Dehiwala</p>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>
  
            <div className="row">
              <FaPhone size={20} className="icon" style={{ color: "white" }} />
              <div className="description">
                <p>0767114320</p>
              </div>
            </div>
  
            <div className="row">
              <FaMailBulk size={20} className="icon" style={{ color: "white" }} />
              <div className="description">
                <p>m.g.rushanthan@gmail.com</p>
              </div>
            </div>
          </div>
  
          <div className="right">
            <h4 className="h4">About me</h4>
            <p className="p">
            An Associate Software Engineer with a hardworking and positive attitude. Possess a wide variety of skill set with a keen interest in learning new technologies.
            </p>
            <div className="social">
            <a href="https://www.linkedin.com/in/rushanthanG" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  