import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='chat-window'>
     <div class="form-container">
        <h2 class="text-4xl font-head tracking-tight font-extrabold text-center">Contact Us</h2>
        <p class="font-light font-head text-center">Want to Discuss about some project reach out us by filling the below form</p>
        <form action="mailto:rohitkushwaha756@gmail.com" method="post" enctype="text/plain">
            <div>
                <label for="email" class="form-label">Your email</label>
                <input type="email" id="email" class="form-input" placeholder="name@flowbite.com" name="email" required />
            </div>
            <div>
                <label for="subject" class="form-label">Subject</label>
                <input type="subject" id="subject" class="form-input" placeholder="How can we help you?" name="subject" required />
            </div>
            <div>
                <label for="message" class="form-label">Your message</label>
                <textarea id="message" rows="6" class="form-textarea" placeholder="Leave a comment..." name="message" required></textarea>
            </div>
            <button type="submit" class="form-button">Send message</button>
        </form>
        <p class="form-info">We will get back to you within 24 hours.</p>
    </div>
    </div>
  )
}
