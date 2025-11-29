import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submit

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage('Login successful!');
        console.log(data.user); // You can store in context or localStorage
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error');
    }
  };

  return (
    <div className='parent-box'>
      <div className="form-box">
        <h2 className='login-text'>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='login-btn' type="submit">Login</button>

          <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
        </form>
        <h6 className='sign-text'>Don't have an account? 
          <Link to='/Signup'>Signup</Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
