import React from 'react';

function Services() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-warning">🌟 Stay Smart. Stay Safe. Stay CyberAware. 🌟</h1>
        <p className="lead text-muted">
          Security isn’t boring — it’s your superpower! Learn, protect, and build confidence online.
        </p>
      </div>

      {/* What We Offer */}
      <h3 className="mb-4 text-center text-info">✨ What We Offer</h3>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 service-card shadow rounded-4 border-0">
            <div className="card-body">
              <h5 className="card-title text-success">📘 Easy Guides</h5>
              <p className="card-text">Simple, beginner‑friendly guides to passwords, scams, and privacy tools.</p>
              <span className="badge bg-gradient-primary">Get Started</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 service-card shadow rounded-4 border-0">
            <div className="card-body">
              <h5 className="card-title text-warning">🛡️ Essential Tools</h5>
              <p className="card-text">Best picks for VPNs, password managers & browser security extensions.</p>
              <span className="badge bg-gradient-warning text-dark">Stay Protected</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 service-card shadow rounded-4 border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">📢 Alerts & Trends</h5>
              <p className="card-text">Up‑to‑date tips on trending scams, breaches, and digital safety news.</p>
              <span className="badge bg-gradient-danger">Be Informed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="mt-5">
        <h3 className="mb-3 text-warning">💡 Why It Matters</h3>
        <p>
          Your data, photos, and online identity deserve protection. Here’s how we help:
        </p>
        <ul className="list-unstyled">
          <li>✅ Spot phishing & suspicious messages</li>
          <li>✅ Use strong passwords and 2FA</li>
          <li>✅ Keep apps & devices updated</li>
          <li>✅ Manage your social media privacy settings</li>
        </ul>
      </div>

      {/* Join Us */}
      <div className="mt-4 mb-5">
        <h3 className="mb-3 text-warning">🚀 Join the CyberAware Community</h3>
        <p>
          Whether you’re starting out or leveling up, CyberAware makes digital safety part of your daily routine — easy, practical, and always up‑to‑date.
        </p>
      </div>
    </div>
  );
}

export default Services;
