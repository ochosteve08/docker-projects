import React, { useState } from 'react';
import  './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch(`${window.location.origin.replace('8080', '3000')}/register`, {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      setResponseMessage(result.message);
      setError(false);
    } catch (err) {
      setResponseMessage('Error submitting form.');
      setError(true);
      console.log(err)
    }
  };

  return (
    <form id="registrationForm" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Register</button>
      <p id="responseMessage" style={{ color: error ? 'red' : 'green' }}>{responseMessage}</p>
    </form>
  );
};

export default RegisterForm;
