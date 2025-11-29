import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simple password match validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        console.log(data);
        // Clear form
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="parent-box">
      <div className="form-box">
        <h2 className="login-text">Create Account</h2>
        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />

          <label>Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

          <button className="login-btn" type="submit">Sign Up</button>

          <p className="sign-text">
            Already have an account? 
            <Link to='/Login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
