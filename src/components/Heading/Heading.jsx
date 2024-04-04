import React from 'react';
import './Heading.css'; // Import CSS for styling
import logo from "../Images/OTH.png";

const Heading = () => {
    return (
        <div className="heading">
            {/* <div>
            {/* <h3>E CELL IIITP</h3>
            <p>Presents......</p>
            </div> */} 
 <img src={logo} alt="Logo" className="logo"/>
            
        </div>
    );
}

export default Heading;