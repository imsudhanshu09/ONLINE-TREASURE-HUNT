// import React from 'react'

// import "./Rules.css"

// const Rules = () => {

 

//   return (

   
//     <div>
      
//       <div>
//         <h1 className='r'>RULES</h1>
//         </div>
//         <div>
//         <ul className='u'>
//           <li>OTH will begin at  "06/04/24 at 00:00"  and will end at   "08/04/24 at 00:00"</li>
//           <br></br>
//           <li>You are allowed to use internet and AI tools to search answer.If the answer is correct then only you can move on to next question</li>
//         <br></br>
//         <li>All answers should be in small letters. For example if answer is " Mumbai " then write " mumbai " as answer</li>
//         <br></br>
//         <li>No space should be given among the answer.For example if answer is <br></br>" Rohit Sharma " then answer should be written as " rohitsharma "</li>
//         <br></br>
//         <li>Full names must be written. For example if answer is " gandhiji " then full name <br/> " mohandaskaramchandragandhi " is the answer </li>
//         <br></br>
//         <li>Numeric answers should be in numbers. For example if answer is " Krishh3 " then answer should be " krishh3 ".</li>
//         <br></br>
//         <li>Only one questions contains fully numeric answer. Example " 1234 ".</li>
//         <br></br>
//         <li>Hints are based on difficulty of questions.So number of hints are relative to questions.</li>
        
//         {/* Add more rules as needed */}
//       </ul>
//       </div>
        
      
        
//     </div>
    
//   )
// }

// export default Rules









import React, { useState, useEffect } from 'react';
import './Rules.css';

const Rules = () => {
  useEffect(() => {
    // Create stars dynamically
    const container = document.querySelector('.background');
    const numStars = 100; // Adjust number of stars as needed
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`; // Randomize star position vertically
      star.style.left = `${Math.random() * 100}%`; // Randomize star position horizontally
      container.appendChild(star);
    }
  }, []);
  
  const [rulesVisible, setRulesVisible] = useState([]);

  useEffect(() => {
    const rules = document.querySelectorAll('.u li');
    rules.forEach((rule, index) => {
      rule.style.opacity = '0';
      rule.style.transition = `opacity 0.5s ease ${index * 0.5}s`;
    });

    const handleScroll = () => {
      rules.forEach((rule, index) => {
        const rect = rule.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.00) {
          rule.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initially check for visible rules on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <h1 className="r">RULES</h1>
      </div>
      <div>
        <ul className="u">
          <li>OTH will begin at "06/04/24 at 00:00" and will end at "08/04/24 at 00:00"</li>
          <br />
          <li>You are allowed to use internet and AI tools to search answer. If the answer is correct then only you can move on to the next question</li>
          <br />
          <li>All answers should be in small letters. For example, if the answer is "Mumbai" then write "mumbai" as the answer</li>
          <br />
          <li>No space should be given among the answer. For example, if the answer is "Rohit Sharma" then the answer should be written as "rohitsharma"</li>
          <br />
          <li>Full names must be written. For example, if the answer is "gandhiji" then the full name "mohandaskaramchandragandhi" is the answer</li>
          <br />
          <li>Numeric answers should be in numbers. For example, if the answer is "Krishh3" then the answer should be "krishh3"</li>
          <br />
          <li>Only one question contains a fully numeric answer. Example "1234"</li>
          <br />
          <li>Hints are based on the difficulty of questions. So the number of hints is relative to questions.</li>
         
        </ul>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Rules;






