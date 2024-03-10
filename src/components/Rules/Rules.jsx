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
        <li>All answers should be in small letters. For example if answer is Mumbai then write ' mumbai ' as answer</li>
        <br></br>
        <li>No space should be given among the answer.For example if answer is " Rohit Sharma " then answer should be written as " rohitsharma "</li>
        <br></br>
        <li>Full names must be written. For example if answer is " gandhiji " then full name " mohandaskaramchandragandhi " is the answer </li>
        {/* Add more rules as needed */}
      </ul>
      </div>
        
      
        
    </div>
    
  )
}

export default Rules