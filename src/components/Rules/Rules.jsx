
// import React, { useState, useEffect } from 'react';
// import './Rules.css';

// const Rules = () => {
//   const [rulesVisible, setRulesVisible] = useState([]);

//   useEffect(() => {
//     const rules = document.querySelectorAll('.u li');
//     rules.forEach((rule, index) => {
//       rule.style.opacity = '0';
//       if (index < 4) {
//         rule.style.transition = `opacity 0.4s ease ${index * 0.4}s`; // Delay for the first four rules
//       } else {
//         rule.style.transition = 'opacity 0.4s ease'; // No delay for the rest
//       }
//     });

//     const handleScroll = () => {
//       rules.forEach((rule, index) => {
//         const rect = rule.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 1.00) {
//           rule.style.opacity = '1';
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initially check for visible rules on mount

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <h1 className="r">RULES</h1>
//       </div>
//       <div>
//         <ul className='u'>
//           <li><u>There are total 8 rules, listed below</u></li>
//         </ul>
//         <ol className="u">
//           <li>OTH will begin at "06/04/24 at 00:00" and will end at "08/04/24 at 00:00"</li>
//           <br />
//           <li>You are allowed to use internet and AI tools to search answer. If the answer is correct then only you can move on to the next question</li>
//           <br />
//           <li>All answers should be in small letters. For example, if the answer is "Mumbai" then write "mumbai" as the answer</li>
//           <br />
//           <li>No space should be given among the answer. For example, if the answer is <br/>"Rohit Sharma" then the answer should be written as "rohitsharma"</li>
//           <br />
//           <li>Full names must be written. For example, if the answer is "gandhiji" then the full name "mohandaskaramchandragandhi" is the answer</li>
//           <br />
//           <li>Numeric answers should be in numbers. For example, if the answer is "Krishh3" then the answer should be "krishh3"</li>
//           <br />
//           <li>Only one question contains a fully numeric answer. Example "1234"</li>
//           <br />
//           <li>Hints are based on the difficulty of questions. So the number of hints is relative to questions.</li>
         
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Rules;




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
      if (index === 0) {
        rule.style.transition = 'opacity 0.4s ease'; // No delay for the first rule
      } else {
        rule.style.transition = `opacity 0.4s ease ${(index - 1) * 0.4}s`; // Delay for rules 2 onwards
      }
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
        <ul className='u'>
          <li><u>There are total 9 rules, listed below</u></li>
        </ul>
        <ol className="u">
          <li>The Online Treasure Hunt (OTH) will commence on "05/04/24 at 00:00" and conclude on "08/04/24 at 00:00".</li>
          <br />
          <li>You're permitted to utilize the internet and AI tools to find answers. Only when your response is accurate can you proceed to the next question.</li>
          <br />
          <li>All answers should be in lowercase. For instance, if the answer is "Mumbai," then write "mumbai".</li>
          <br />
          <li>Avoid spacing in your answers. For example, if the answer is "Rohit Sharma," write "rohitsharma".</li>
          <br />
          <li>Provide full names when necessary. For instance, if the answer is "brij", then the full name "brijdeepgoyal" is required.</li>
          <br />
          <li>Numeric answers should be presented in numbers. For example, if the answer is "Krishh3," write "krishhthree".</li>
          <br />
          <li>Only one question entails a fully numeric answer. For instance, "12345" should be written as "onetwothreefourfive".</li>
          <br />
          <li>The number of hints provided correlates with the difficulty of the questions.</li>
          <br/>
          <li>If you have any questions or need assistance, please don't hesitate to reach out to the organizing team: <br/> Sudhanshu Kumar: 9523788886
          <br/> Garv Jauhari: 6307129301  <br/> We're here to help! </li>
</ol>
<div className="background"></div>
      </div>
    </div>
  );
};

export default Rules;


