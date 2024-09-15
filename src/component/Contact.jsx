import React, { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    mobileNo: '', // Changed 'phone' to 'mobileNo'
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8181/user/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); 

      if (response.ok) {
        setStatus(result.message || 'Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <div className='chat-window'>
      <div className="form-container">
        <h2 className="text-4xl font-head tracking-tight font-extrabold text-center">Contact Us</h2>
        <p className="font-light font-head text-center">
          Want to discuss a project? Reach out to us by filling out the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="name@flowbite.com" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              aria-label="Your email"
            />
          </div>
          <div>
            <label htmlFor="mobileNo" className="form-label">Your Mobile Number</label> {/* Updated label */}
            <input 
              type="tel" 
              id="mobileNo" 
              className="form-input" 
              placeholder="(123) 456-7890" 
              name="mobileNo" 
              value={formData.mobileNo} 
              onChange={handleChange} 
              required 
              aria-label="Your mobile number"
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea 
              id="message" 
              rows="6" 
              className="form-textarea" 
              placeholder="Leave a comment..." 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              aria-label="Your message"
            />
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
        {status && <p className="form-info">{status}</p>}
      </div>
    </div>
  );
}
