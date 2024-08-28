// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for contact styling

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or through my social media profiles.</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
