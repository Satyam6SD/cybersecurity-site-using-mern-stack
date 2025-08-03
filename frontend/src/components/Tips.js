// src/components/Tips.js
import React from 'react';

function Tips() {
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">💡 Cyber Safety Tips</h2>
      <p className="lead text-muted">
        Simple steps to help you stay secure and protect your digital life.
      </p>
      <ul className="list-group mt-3 shadow-sm">
        <li className="list-group-item">✅ Use strong, unique passwords for every account.</li>
        <li className="list-group-item">🛡️ Enable two-factor authentication wherever possible.</li>
        <li className="list-group-item">🚫 Don’t click on suspicious links or email attachments.</li>
        <li className="list-group-item">🔒 Keep your devices and apps updated.</li>
        <li className="list-group-item">📵 Avoid using public Wi-Fi for sensitive activities.</li>
      </ul>
    </div>
  );
}

export default Tips;
