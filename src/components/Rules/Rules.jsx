import React from 'react'
import "./Rules.css"

const Rules = () => {
  return (

   
    <div>
      <div>
        <h1 className='r'>RULES</h1>
        </div>
        <div>
        <ul className='u'>
          <li>OTH will begin at  ""  and will end at   ""</li>
          <br></br>
          <li>You are allowed to use internet and AI tools to search answer.If the answer is correct then only you can move on to next question</li>
        <br></br>
        <li>All answers should be in small letters. For example if answer is Mumbai then write ' mumbai ' as answer</li>
        <br></br>
        <li>No space should be given among the answer.For example if answer is " Rohit Sharma " then answer should be written as " rohitsharma "</li>
        <br></br>
        <li>Full names must be written. For example if answer is " gandhiji " then full name " mohandaskaramchandragandhi " is the answer </li>
        <br></br>
        <li>Hints are based on difficulty of questions.So number of hints are relative to questions.</li>
        
        {/* Add more rules as needed */}
      </ul>
      </div>
        
      
        
    </div>
    
  )
}

export default Rules