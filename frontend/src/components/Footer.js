import React from 'react';

function Footer() {
  return (
    <footer className="text-center p-3 mt-4" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
      <div className="mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      <div>© 2025 CyberAware. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
  