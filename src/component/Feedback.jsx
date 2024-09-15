import React from 'react'
import "./Contact.css"

export default function Feedback() {
  return (
    <div className='chat-window feedback'>
     <div class="form-container">
        <h2 class="text-4xl font-head tracking-tight font-extrabold text-center">Feedback Form</h2>
        <p class="font-light font-head text-center">Tell me about our services...we are here to listen and keep improving
        </p>
        <form action="mailto:rohitkushwaha756@gmail.com" method="post" enctype="text/plain">
            <div>
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" class="form-input" placeholder="John Doe" name="name" required />
            </div>
            <div>
                <label for="email" class="form-label">Your email</label>
                <input type="email" id="email" class="form-input" placeholder="name@flowbite.com" name="email" required />
            </div>
            <div>
                <label for="rating" class="form-label">Rating</label>
                <input type="number" id="rating" class="form-input" placeholder="Rate in between 0-10" name="rating" required />
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
