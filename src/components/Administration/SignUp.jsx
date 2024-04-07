import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css';
// const BASE_URL=process.env.BASE_URL;

const SignUp = () => {
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

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    if (formData.password !== formData.confirmPassword) {
      // If passwords don't match, set passwordsMatch to false and return
      setPasswordsMatch(false);
      return;
    }
    // try {
    //   const response = await axios.post('https://online-treasure-hunt-10.onrender.com/SignUp', formData);
    //   console.log("Server response:",response);
    //   if(response.data.status == 69){
    //     alert("Username or Email is taken")
    //   } else {
    //     console.log("Server response:",response.data.status);
    //     setShowPopUp(true); // Show pop-up after successful registration
    //   setTimeout(() => {
    //     setShowPopUp(false); // Hide pop-up after 3 seconds
    //     navigate('/'); // Navigate to home page
    //   }, 2000);}
    //     //navigate('/');
    //   // Reset form after successful signup
    //   setFormData({
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (error) {
    //   console.error('Error during signup:', error);
    // }
  };
  

  return (
    <div className="signup-container">
      <h2 className="signup-title"></h2>
      <form action="/SignUp" method="POST" className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='abc@gmail.com'
            name="email"
            value={formData.email}
            onChange={handleChange}
            //pattern= "^[\w-]+(\.[\w-]+)*@(gmail\.com|cse\.iiitp\.ac\.in|ece\.iiitp\.ac\.in)$"
            title="Please enter a valid email address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            minLength="8"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            minLength="8"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {!passwordsMatch && (
            <p className="error-message">Passwords do not match!</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {showPopUp && (
        <div className="popup">
          <p>You have successfully registered!</p>
          <p>Redirecting to the home page...</p>
        </div>
      )}
      <div className="background"></div>
      <div className="signup-sun"></div>
    </div>
  );
};

export default SignUp;