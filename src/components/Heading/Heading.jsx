import React from 'react';
import './Heading.css'; // Import CSS for styling
import logo from "../Images/OTH1.png";

const Heading = () => {
    return (
        <div className="heading">
            {/* <div>
            {/* <h3>E CELL IIITP</h3>
            <p>Presents......</p>
            </div> */} 
 <img src={logo} alt="Logo" width={800} height={500}/>
            
        </div>
    );
}

export default Heading;