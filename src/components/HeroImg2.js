import React from "react";
import "./HeroImg2Styles.css";

 
class HeroImg2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 

          };
    }
    render() { 
        return ( 
            <div className="hero-img">
                 <div className="heading">
                     <h1 className="h1">{this.props.heading}</h1>
                     <p className="p">{this.props.text}</p>
                 </div>
             </div>
         );
    }
}
 
export default HeroImg2;

