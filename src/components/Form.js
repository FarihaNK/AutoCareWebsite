import './Home.css';
import React, { useState } from 'react';
import instagram from './Images/instagram.png';
import facebook from './Images/facebook.png';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any action with the form data here, e.g., send it to a server
    console.log('Form data submitted:', formData);

    alert('Email sent successfully')

    // Clear the form after submission
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='form-contacts'>

    <div className="Form" id="Form">
      <h4>Have questions? Email us!</h4>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Jane Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn Button mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>

    <div className='contacts'>
          <h4>Contact Us</h4> <br/>
          <div className='socials'>
          <a href={"https://www.facebook.com/ShahnawazAutoCare/"} target="_blank" rel="noopener noreferrer">
            <img className="facebook-icon" src={facebook} alt="Facebook" style={{ width: '40px', height: '40px' }} />
          </a>
          <a href={"https://www.instagram.com/shahnawazautocare/"} target="_blank" rel="noopener noreferrer">
            <img className="instagram-icon" src={instagram} alt="Instagram" style={{ width: '40px', height: '40px' }} />
          </a>
          </div>
          <br/>
          <p>phone number</p>
          <p>+1 (416) 742 9615</p>
          <p>emailaddress.email.com</p>
        </div>
    </div>
  );
};

export default Form;
