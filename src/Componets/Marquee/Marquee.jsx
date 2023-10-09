import React from "react";
import './marquee.css'
import Marquee from "react-fast-marquee";
import OtherLinks from "../OtherLinks/OtherLinks";

const App = () => (

    <div className="marquee2">
         <Marquee
             className="marquee-container1"
            loop={0}
            pauseOnHover={true}
            autoFill={true} 
         >
          
    <OtherLinks/>
  </Marquee>
    </div>
 
);

export default App;