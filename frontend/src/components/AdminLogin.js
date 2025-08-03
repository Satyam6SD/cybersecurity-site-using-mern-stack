import React, { useState } from 'react';

function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Fake validation: email: admin@example.com, password: admin123
    if (form.email === 'admin@example.com' && form.password === 'admin123') {
      setMessage('✅ Login successful! Welcome Admin.');
    } else {
      setMessage('❌ Invalid email or password.');
    }

    // Clear form (optional)
    setForm({ email: '', password: '' });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2 className="mb-3 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            required 
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
      {message && <div className="mt-3 text-center">{message}</div>}
    </div>
  );
}

export default AdminLogin;
