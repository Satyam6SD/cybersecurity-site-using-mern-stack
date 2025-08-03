import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 rounded-4">
        <h2 className="mb-4 text-primary">About CyberAware</h2>
        <p className="mb-4">
          <strong>CyberAware</strong> is dedicated to helping individuals, students, and small businesses understand and navigate the digital world safely.
          We believe cybersecurity isn’t just for experts — it’s for everyone.
        </p>

        <h4 className="text-secondary mb-3">Our Mission</h4>
        <p className="mb-4">
          To empower people with practical knowledge and tools that protect their personal data, devices, and digital lives from common cyber threats.
        </p>

        <h4 className="text-secondary mb-3">What We Do</h4>
        <ul className="mb-4 list-unstyled">
          <li>✅ Simplify cybersecurity concepts into easy-to-follow guides.</li>
          <li>✅ Share tips and best practices to secure your online presence.</li>
          <li>✅ Offer resources and tools to spot and stop cyber attacks before they happen.</li>
          <li>✅ Spread awareness about emerging threats like phishing, malware, and identity theft.</li>
        </ul>

        <h4 className="text-secondary mb-3">Why It Matters</h4>
        <p className="mb-4">
          In today’s connected world, our data, photos, and identities live online.
          CyberAware helps you browse safely, protect your privacy, and build habits that keep your digital life secure.
        </p>

        <h4 className="text-secondary mb-3">Join Us</h4>
        <p>
          Whether you’re just starting to learn about cybersecurity or you want to stay updated with the latest trends — CyberAware is here to support your journey towards a safer internet experience.
        </p>
      </div>
    </div>
  );
}

export default About;
