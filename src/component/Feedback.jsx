import React from 'react';
import './Contact.css';

export default function Feedback() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      userId:123 ,
      rating: formData.get('rating'),
      feedback: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:8181/user/save-user-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Display success message
      } else {
        alert('Failed to submit feedback. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='chat-window feedback'>
      <div className="form-container">
        <h2 className="text-4xl font-head tracking-tight font-extrabold text-center">Feedback Form</h2>
        <p className="font-light font-head text-center">
          Tell us about our services... we are here to listen and keep improving
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" id="name" className="form-input" placeholder="John Doe" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Your email</label>
            <input type="email" id="email" className="form-input" placeholder="name@flowbite.com" name="email" required />
          </div>
          <div>
            <label htmlFor="rating" className="form-label">Rating</label>
            <input type="number" id="rating" className="form-input" placeholder="Rate between 0-10" name="rating" required />
          </div>
          <div>
            <label htmlFor="message" className="form-label">Your message</label>
            <textarea id="message" rows="6" className="form-textarea" placeholder="Leave a comment..." name="message" required></textarea>
          </div>
          <button type="submit" className="form-button">Send message</button>
        </form>
        <p className="form-info">We will get back to you within 24 hours.</p>
      </div>
    </div>
  );
}
