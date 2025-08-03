import React, { useEffect, useState } from 'react';

function Home() {
  const [backendMessage, setBackendMessage] = useState('');

  // Fetch message from backend when component loads
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => console.error('Error fetching backend message:', err));
  }, []);

  return (
    <div className="text-center">
      <h1>Welcome to CyberAware</h1>
      <p>Empowering you to stay safe in the digital world.</p>

      

      <div id="cyberCarousel" className="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#cyberCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#cyberCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#cyberCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img11.png" className="d-block w-100" alt="Stay Safe Online" />
          </div>
          <div className="carousel-item">
            <img src="/assets/img12.png" className="d-block w-100" alt="Protect Your Privacy" />
          </div>
          <div className="carousel-item">
            <img src="/assets/img13.png" className="d-block w-100" alt="Learn Cybersecurity Basics" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#cyberCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#cyberCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Text below carousel */}
      <div className="mb-4">
        <h5>Stay Safe Online</h5>
        <p>Learn how to protect your devices and data from cyber threats.</p>
      </div>
    </div>
  );
}

export default Home;
