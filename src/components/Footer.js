import React from 'react';
import './Footer.css'; // Import CSS for footer styling

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Alexander Robins. All rights reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/alexander-robins/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/ajrobins" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
